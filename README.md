### My personal webpage

The page is under construction 

#### Structure
* public/ -- Compiled output (is included for GitHub Pages)
* src/ -- Elm source code
* static/ -- Static page content

#### Building
First run the `setup.sh` which sets up the pre_commit script

You need the Elm compiler to build the source, uglify to optimize for deployment, elm-live to start a development server.

You can get all these from npm with:
```bash
npm i -g elm elm-live uglifyjs
```

Then run `./build.sh` to create an optimized build `./build_dev` to start the development server.

