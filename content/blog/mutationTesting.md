---
title: Mutation Testing with an example
date: 2020-05-13
type: posts
---
### Introduction
I have watched a [conference talk](https://www.youtube.com/watch?v=LoFJajoJQ2g) that introduced the concept of mutation testing to me (with a fairly interesting title I must add :smiley: ).
I have heard of Mutation Testing for the first time, and the concept seemed to be interesting.

The basic idea behind mutation testing is to verify that your tests will fail (or your code will crash) upon a change made to the code so that you can see whether some little changes to the code in the future would reflect on the tests. It seems to me that this tool can be used to have better confidence in your code. There are obviously many parts of the software development process that can go wrong, universal test coverage under different effecting factors seems extremely hard, and software verification is a topic still being actively researched. Thus, this tool is not (like many other tools like testing and coverage frameworks) a silver bullet.

Some problems with mutation testing can be:
* The tooling seems to be premature for some languages, which makes me think that this method is still not widely used.
* There are assertions that the programming language doesn't reflect based on the results of some functions. For example, we know for certain, the lists cannot have negative lengths, thus mutation of comparison operators doesn't make a lot of sense.

The speaker in the talk refers to the second point I made, and he argues that some of these shortcomings can show that the code can be more expressive, thus the list empty example that I have given above would probably be eliminated by calling isEmpty methods instead of length comparison to zero.

### Code

I wanted to test this approach in a well-tested code repository in a familiar language.

Some time ago, I had a coding assignment that needed to be robust and had the objective well-defined, thus I used TDD while writing code. The code was in Python and all the moving parts of the code had unit tests written for them. I cannot disclose the nature of the problem or the code, unfortunately, due to the confidentiality of the assignment.

In the rest of this article, I will try to describe what I have gone through while running the mutation tests through [Cosmic Ray](https://github.com/sixty-north/cosmic-ray) and the test results.

The Cosmic Ray library has its own CLI(`cosmic-ray`) to create the environment, execute the unit tests in the environment, and run the  mutation tests. This main tool operates on a config file that specifies how to discover the source and test files. There is also configuration available to set custom timeouts and exclude unwanted files. The state of any generated test or execution is logged in an SQLite DB file. There are also some helper tools that generate comprehensive reports from the state named `cr-report`, `cr-html`, `cr-rate`, `cr-badge`, and `cr-xml` that comes with Cosmic Ray.

### First run

The steps to run the mutation tests have been documented in the [Quickstart section](https://cosmic-ray.readthedocs.io/en/latest/quickstart.html) of Cosmic Ray documentation, but here is a quick recap:
1. Create a config file `config.toml` in the directory you will be running the CLIs from, like:
    ```toml
   [cosmic-ray]
   module-path = "<source code path>"
   python-version = "" # Can be empty, will autodetect
   timeout = 2.0 
   # I used a smaller timeout than the documented 10s
   # because the unittest in my code is supposed to execute fast.

   # Supports glob.glob format, used to exclude various .py files
   # For example if using Django, you can exclude migrations
   # and Django tests via this
   excluded-modules = []
   
   # I am using unittest in my code.
   # If you have some other unit testing library,
   # you should fill this according to it.
   test-command = "python -m unittest <test_dir>" 

   # You can use Celery (or a custom engine you adapt to Cosmic Ray),
   # to change the execution of the task.
   # Celery allows you to parallelize the execution.
   [cosmic-ray.execution-engine]
   name = "local"

   # You can tell Cosmic Ray to clone a git repo, too,
   # instead of using local code.
   [cosmic-ray.cloning]
   method = "copy"
   # You can ask the tool to execute commands
   # (like `pip install -r requirements.txt`)
   # after cloning the code, before mutating it
   commands = [] 
    ```
2. Run `cosmic-ray init config.toml db.sqlite` to create the initial container in `/tmp` and initialize the test state. The test state will be stored in a file named `db.sqlite` in this case.
3. Run `cosmic-ray baseline --report db.sqlite` to execute the tests without mutations to make sure the environment is created correctly, and the tests are correct.
4. Run `cosmic-ray exec db.sqlite` to run the tests with mutations. This task may take some time, but since it is using SQLite as the place to store the state, you can run the reporter in a different thread and/or cancel/resume tasks whenever you want.
5. When the tests are complete or running, you can have a detailed report generated with `cr-report` however I prefer the `cr-html` tool to generate reports after tests are complete. 

### First problem
When I executed step 2 for the first time I got an error in Cosmic Ray, about a type mismatch in `cosmic-ray/operators/exception_replacer.py`. I dig into the code (the buggy code was [here](https://github.com/sixty-north/cosmic-ray/blob/master/src/cosmic_ray/operators/exception_replacer.py#L34) and fixed the problem by adding a type check.

If anyone has this problem, you just need to add 2 lines to the downloaded package code (TODO: submit a PR or open an issue):
```python
        ...
        test_list = atom.children[1]
        if isinstance(test_list, Name):
            return (test_list, )
        return test_list.children[::2]
        ...
```
### Second problem
It took too long to run the `exec` command, apparently, it was trying to load all of my `/venv` folder, since I have provided the project root directory as the module directory of the project. I have fixed this by moving all the project source code to a new `src` directory. Later, I saw in the documentation that they have also specified that you should be putting all source code to a specific directory.

### Et voilà!
The code executed correctly, and I have rushed to the HTML file I generated using `cr-html` tool. Here are some offender highlights:

* #### Removal of the decorator `@staticmethod`
  For those who are not proficient in Python enough, while doing OOP in Python, in order to create static methods, you use this specific decorator to prevent Python from populating the first argument of the objects of the class with the `self` argument (`this` pointer of Python).
  
  The tool was testing whether removing this decorator would eliminate the mutant. However, since classes (not instances) are used to call static methods, the functionality of the code didn't change.
  
  Thus, this seems to be an exception where taking no action would be a better strategy.

* #### Change from floating-point division to integer division (`a/b` -> `a//b`)
  In Python, there are 2 different division operators, `/` for true division (results with a float) and `//` for integer division.
  
  In the code, there were some calculations using division and apparently, I have always used round and nice numbers to test the implementation, and never used values that can have fractions.
  
  Mutation testing FTW!

* #### Length value range check
  In Python, the `len` operator is used to check a list's length.
  
  I had some code that made sure list is empty by checking `len(list) == 0`, for which a mutant survived with `len(list) <= 0`. Now from a context perspective, Python (and any language that I know of) doesn't have lists with negative lengths.
  
  Now, when I take a look at [PEP 8](https://www.python.org/dev/peps/pep-0008/), the default style guide for Python, I see that the Python core developers have agreed that the best way to check whether a list is empty or not is to use `if list` instead of `if len(list) == 0`, so my code was non-Pythonic.
  
  Good to know, an interesting win for mutation testing.

* #### String comparison check
  In my code, I was checking if strings are empty with `some_string == ""` :sweat_smile: . It seems like it is the similar to the case above.

  Furthermore, I had comparison checks for two strings (like `stmt if foo == bar else stmt2`) and comparison operators started failing. Now to fix this I can try to add some more test cases but for my case, my code doesn't care about the ordering of the strings. The only thing that it cares about is whether they are equal or not. So, creating extra cases to handle other operators doesn't really signify something for my case, other than creating repetition.
  

* #### Equality to `is` operator check
  In Python, the `is` operator is used specifically to indicate whether two objects reside on the same location in the memory (since in Python everything is a reference).
  
  The equality checks, in Python, has to be done using `==` operator, since objects can be on different locations but can be equal, instead of the `is` operator. Thus, this framework converts equality checks to `is` operators to verify that using different objects fail the tests upon using the `is` operator. However, in Python, there are some optimizations on commonly used immutable values, like `5` and `""`, so that if they exist in multiple places in code, they will only be created once to save from memory. Hence, the empty string checks fail this test, too, since all empty strings have the same memory address, no matter where they are created.

* #### Number replacer
  The number replacer replaces some hard-coded numbers in the code, like list indexes.
  
  In my code, there are sections that use the first elements in a list. The number replacer tests that mutants are generated by replacing 0s with -1s, effectively making the code use the last element of a list instead of the first one.
  
  The surviving mutants for these have actually revealed that I haven't tested the cases where there are more than 1 different elements in a list in the code's context.

* #### Missing tests for some boundary conditions
  The inequality replacer code has replaced some length checks with comparison operators, and the mutants survived, so another win!

* #### Replacing `if __name__ == "__main__"`
  Well, I was actually surprised to see this turn-up, but then I realized the main file (even though it only calls a function) is included in the `src` folder, so for the next run, I will exclude it.
  
### Conclusions
I think that this tool has allowed me to have a better insight on what my tests cover, and some cases that they don't cover. Furthermore, I have actually seen some smelly parts of my code that I have written some time ago.

I will definitely use and recommend this tooling for Python, and mutation testing as an approach for creating better code and tests. Don't forget though, the results may never be perfect!

Have a nice day! 
