---
title: JFall 2024 Insights
date: 2024-11-16
type: posts
draft: true
summary: "This year, I attended the largest Java conference in the Netherlands, which featured exciting discussions and innovative insights relevant to software engineering. One standout keynote stressed the significance of open-source contributions, highlighting how proactive engagement can enhance organizational practices. Although the talk acknowledged the overlooked work behind effective open-source solutions, it also illustrated a novel approach: prioritizing pull requests over issue reporting to inspire contributions. Another memorable speech explored coping with change, emphasizing empathy, wisdom, and bravery as key emotions vital for navigating the evolving tech landscape. The presenter reflected on generational shifts in tech and encouraged open-mindedness and dialogue across experiences. Additionally, I learned technical optimizations from the \"1 Billion Row Challenge \" focusing on improving I/O operations in Java. Key strategies included utilizing parallel streams and memory APIs to enhance data processing speed. Finally, we delved into cognitive biases affecting decision-making in engineering. From the Ikea effect to the bike shed effect, addressing these biases can lead to better collaboration and product outcomes. This conference not only informed but also inspired a renewed commitment to best practices in software development."
# Summary made by ChatGPT, live is too short :)
---
### Introduction
I have attended the largest Java conference in the Netherlands this year.
I have been following the [Netherlands Java User Group](https://nljug.org/) for some time now and joining some of the meetups organized by them.
As a member, I was able to get a seat for this conference.

The conference was in a relatively remote part of the Netherlands (read: not Amsterdam), in a cinema.
One of the things that surprised me the most even at the beginning was that there are a good deal of software consultancy companies present in the event venue.
I have seen many stands that are of different shapes and decorated with different colors, but all of them seem to be targeting more or less the same goal.
I believe that was also one of the few times that I have seen many Dutch developers around, and many of these consultancies racing to offer positions to the Dutch audience.
There were even some Dutch government entities seeking recognition of their potential future employees.
Well, the conference was in English, but the venue was not :D.
There were some fun and inspiring talks that I attended that I believe will carry an impact within me and I hope to deliver the impact upon you.
Let's begin.

### Keynote 1: The Power of Open-Source, how pet projects help your daily work

During this keynote, the presenter presented the importance of using open source, not only that one should always be contributing to a wider open source community, but also apply open source solutions within the whole company.
He has provided an example of theirs in ABN Amro (a Dutch bank, where he is currently employed at).
One of the points I found important was that he encouraged everyone to take the initiative proactively in their hands.

They presented an opinion that the people who do the work that really matters are the ones that no one sees, however, I was very skeptical about this opinion.

It is accurate in the sense that in the open source community, many of the components that "just work" don't really get attention, I believe that is a very damaging thing.
Recently an open source bug was found due to a Microsoft employee realizing that SSH became slower.
It was due to a dependency on SSH that the maintainer was maintaining out of their virtue but was not recognized.
No company was sponsoring the work, thus only one maintainer was looking through the PRs, and one small mistake leaked into the source code.

This is a very prominent example of what happens when things are hidden under the rug.
So, I think even though there could be some truth to this, some people at least need to stay on top of the project.

Lastly, there was a small suggestion on how they carry out the open source process, which I found to be a bit unorthodox but seemingly effective.
They don't expect issues, only PRs.
* If you want a feature request, write the documentation for it in a PR.
* If there is a bug, write the test that is failing for it.

And someone else can pick up the implementation of the fix.

Now, this may not be applicable to all use cases out there, but I believe it helps people onboard the idea of open source, and contribute it one way or the other.
Given that the developers are *ahem* not very fond of *ahem* writing docs or tests, this would also ensure up-to-date tests & docs as a side benefit.

To be fair, I haven't seen a wide adoption of this approach, even though it sounds like it is a very trivial and easy thing to do.
So I wouldn't directly jump on it for the most important projects, but seems like a sound idea to experiment with.

### Keynote 2: Braving the Change: recalibrating to new realities
I would like to start with the disclaimer that I am usually not very fond of keynote speeches, I usually feel that I am being robbed of the choice of the better talk.
However, I wasn't expecting a talk that would be so relevant and so applicable to everything, I was astonished at the end.
In this presentation, the topic was not specifically about Java, or not even programming in general.
It is about how to cope with change.

The talk starts with a funny anecdote of the presenter's experience with a senior developer back in the day, where the developer was complaining about people writing code using IDEs.
Back in the day, IDEs were not as effective as they are today, and they have seen many PRs submitted that have used a function or a piece of code that was wrong and was there only because the IDE suggested it.
They mentioned that they discarded the comments when they were a junior, and years have passed.
They have started helping grade some students' homework, and they couldn't help but complain about how bad the code was, since it was actually completely wrong since it was written by ChatGPT.
All of a sudden, they became the seniors who complained about how bad junior engineer's code is.

He would go on and mention how most of the new things wouldn't come to this seasoned code warrior not as a shiny new thing.
As a junior back in the day, they would be more excited about new things coming out, but as one season out, it seems everything is just another reinvention of already existing.

They now feel like they have become this folk that seems to reject modernity in any case.
So, the stage is set, what now? How can this be dealt with?
Or, do we just accept this as the circle of life, and move on until we tenure out and retire?

The solution seems to be hidden in three key emotions, from The Wizard of Oz:
* Empathy

  In Wizard of Oz, the Tin Man seeks to have a heart so that they can feel love.
  According to the speaker, this maps perfectly with the feeling of empathy towards one another.
  In the context of change, some parties tend to embrace it directly, and those who are more skeptical of the change.
  The problem starts when these two parties cannot stay on the same page, whether it be a junior who finds the seasoned developer to be too old school, or the senior who knows way better than a tool that can generate code.
  Hence, at the core, the problem is a lack of empathy.
  The talk argues if the parts can be more empathetic, they can both thrive by learning from each other.
  The presenter said that if they were to see this senior developer back then, they would try to understand more, and try to learn from their experience, instead of ignoring them completely.

  I have been observing this trend to always reinvent the wheel for many things, however always slightly different.
  I think from time to time I become the one that embraces, while other times more sceptic.
  I believe that I always try to keep an open mind, but I think I will try to also empathize and try to understand different perspectives with more insight.

* Wisdom

  In the story, the Scarecrow seeks brains so that they can be smart.
  For our purposes, the need for the Scarecrow aligns with the need for wisdom.
  One of the solid points from the talk was that one either needs to do something or listen to people who have already done things.
  Thus, experience (direct or indirect) yields wisdom regarding anything new.
  And, to obtain experience, to make or hear something new or different, one needs to be curious.
  To lead the initiative for this path, one needs to listen to their curiosity, become adventurous, and take an interest.
  However, as there is more code to be written and talks to be listened to more than any before, the speaker warns to always limit and determine what one will follow and keep interest in.
  I believe that this part has resonated with me the most, as I find myself usually focused on too many things at the same time.

* Bravery

  Representing the third feeling, bravery, we have the Cowardly Lion.
  For us, that would be actively deciding to take a step further, explore new things, and experience a new mindset.
  We need to face forward as new things throw even more challenges at us.
  To embrace them, we always have to learn new things and forget (or maybe just hindsight) the things we already know.
  As a relatively junior in the engineering world, this one has been the easiest for me to embrace, and I wish to keep it that way.
  I hope that I can always keep some of my experimentative side as I mature as a software engineer.

In the story; the Tin Man, the Scarecrow, and the Cowardly Lion experience these emotions, without their knowledge.
So, at the end of the story, the wizard doesn't grant them these emotions, only makes them aware of such already exist within.
Even though we are human beings capable of showing them in real life, I feel that we need a reminder from time to time.
Not only for our craftmanship but for any change in our life condition or relationships, I believe, remembering to recognize the feeling will pave the way to much greater things.
I hope this text serves as a reminder to you!

###  1BRC – Nerd Sniping the Java Community

The next talk on my list was about the 1 Billion Row Challenge.
For some context, this challenge is about reading a file of 1 billion rows, and how fast one can do it.
The speaker started this challenge spring of this year, and the talk encompassed how people solved and improved the throughput with different tricks.
As expected, all these were focused on increasing the I/O, as the bottleneck.

Overall there were a few tricks that stood out:
1. `Stream.parallel()` significantly improves the throughput
2. Use the foreign memory API to read files faster (JEP454, not JNI)
3. Divide the task into pages, for which empirically the best page size was `sizeof(2^nd level cache) / N_CPU`
4. Enhance parsing by implementing a custom state machine specifically for the input
5. Use SIMD optimizations that the compiler can support
6. Use bit-level operations instead of if branches (branching can be costly due to predictions)
7. To store data, `HashMap` with linear probing is better than open addressing because the keyspace is known beforehand and limited in size.
8. Use GraalVM to AOT compile the code
9. Purify the loops by extracting the data dependencies, and make it clear to the compiler that the loop can parallelize

Overall, after the first few, the code actually got quite fast already.
So, the rest can be a bit overkill for the day-to-day work.
But, I believe it is still insightful to see how basic optimization techniques and algorithms that I studied in college can be applicable to Java.

### Battling your Biased Brain
In this talk, the speaker has gone over different biases, sharing anecdotes from daily life and software engineering to support their points.
1. The Ikea effect

One of the first biases introduced in the talk is related to the Ikea effect.
This is a phenomenon that has been observed since people love the products that they helped build, even partially.
It has been shown that, even though your furniture has defects (some holes here and there), you tend to put a higher value on it.

In our practice, it reflects as people create PRs and ask for reviews, as people see these reviews, they seem attacked regarding the value that their code has brought or will bring.
I feel like I might be also subject to this bias, even though I try to not reflect it in PR reviews :D.
According to the speaker's research, this is mainly due to the psychological need for competency.
This bias actually has a positive effect as it decreases our stress levels with help from self-confidence factors, however, if applied on a bigger scale, will probably be dangerous.
The over-attachment and constant need to justify decisions might wear people down during reviews and might create schisms among the team.

To overcome this bias, before starting and during the development of a project, try to assess whether the solution has been built elsewhere. If so, tap into the existing knowledge.
After this solution has been built, try to assess the importance and the value that this project has brought.
One significant blocker in the way could be that simply one doesn't have enough knowledge for assessment.
In this case, it is always advised to write down what you know and make the choices made explicit by putting them on paper.
Then assessing from all angles becomes easy, and you can ask others objectively whether there is any bias to what you have proposed or built.
A template for this is to start with writing the Problem, Solution options, Considerations from the requirements, and wins and losses for each case.
Even after all the writing, it is just human nature to feel bias towards specific solutions one way or the other.
So, in the end, admit that you might be biased, honesty leads to better products.

For me, one of the strange phenomena that is related is the so-called "not built here" symptom, basically leading to rebuilding all solutions that already exist elsewhere.
I have yet to see an engineering problem that one of the FAANG or open source communities hasn't yet solved or at least attempted.
So, whenever I see some in-house implementation, or a proposal to rebuild a certain solution from the ground up, I feel a little ick.
So, one of the key takeaways from this talk for me was a better insight into why this happens and how to resolve it, at least for the teams and companies that I am a part of.

2. Majority bias

This bias is when people want to follow the masses, up to the point that many people agree on something just to be on the same page as most others.
This creates the bandwagon effect.
Most of the discussions go around a solution (usually a greenfield project) that is going to solve all the problems.
And as the majority, people who might have more experience, agree with this solution, it should be on the right side of history.

This occurs mainly because people don't want to spend too much of their mental capacity on thinking, thus, agreeing with the majority feels easier, and more convenient.
We are all humans and our mental capacity is limited to a certain extent, we cannot be the ones making all the decisions all the time.
Furthermore, agreeing with the crowd satisfies the people's need to be accepted and liked by others.
Since the proponents of the greenfield project will be biased by the Ikea effect, people will like others who agree with their solution.

Overcoming this bias is tough, and one needs to be brave enough to stand out from the crowd.
It requires being aware of such bias, especially the hype train around a solution.
Remember, there will always be tradeoffs. Find them and share them, it will make it easier!

3. Bike shed effect

The talk starts with: People love ceremonies.
Whether it is scrum, agile, or endless meetings.
Maybe it is also how the code should be structured or how a certain architectural decision shall be made.

This bias, similar to the majority bias above, stems from the satisfaction we get from answering simple questions.
We don't have to spend too much time thinking about the response, as we have survived a problem similar before it is easier to appropriate past experience to everything that seems like it.
There are probably many rituals, or manual ceremonies on PRs, in meetings, or in processes that are repeated so much that it seems trivial to apply it everywhere.

The speaker has mentioned a quote from the FreeBSD comms the infamous [Bikeshed email](https://phk.freebsd.dk/sagas/bikeshed/) which basically describes this issue in detail.
The main idea is that no one should spend arguing about every little detail about things that everyone is most capable of understanding and doing.

The solution to this problem is to first capture an instance of this happening.
Whether it is a nifty detail about how the code should be structured, or how to specify details of a meeting.
Then, make a decision on it, automate it, or simplify it, as much as you can.
In the case of code, simply using a linter tool to highlight the most common patterns is good enough.
In the case of meetings, you can build some structure around them to simplify and make good use of everyone's time.

### Conclusion

Overall, the largest Java conference in the Netherlands took one full day, with nine talks and workshops happening in parallel.
I was only able to attend a few, and I wanted to share with you those that made the most impact on me.
Thank you, dear reader, for making it this far. I hope you enjoyed reading this article as much as I enjoyed writing it.