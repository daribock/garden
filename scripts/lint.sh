#!/bin/sh

docker run --rm \
    -e RUN_LOCAL=true \
    --env-file ".github/linter.env" \
    -v "$PWD":/tmp/lint github/super-linter:v4
