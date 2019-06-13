#!/usr/bin/env bash


elm-live -p 4000 -s index.html -- src/Main.elm --output=public/main.min.js --debug
