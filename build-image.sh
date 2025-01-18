#!/bin/sh

npm run build
docker build -t soal-pich/api .
