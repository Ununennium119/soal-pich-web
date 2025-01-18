#!/bin/sh

npm intall
npm run build
docker build -t soal-pich/api .
