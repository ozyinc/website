#!/usr/bin/env bash
elm make src/Main.elm --output=./public/main.js --optimize
uglifyjs public/main.js --compress 'pure_funcs="F2,F3,F4,F5,F6,F7,F8,F9,A2,A3,A4,A5,A6,A7,A8,A9",pure_getters,keep_fargs=false,unsafe_comps,unsafe' | uglifyjs --mangle --output=public/main.min.js
rm public/main.js
