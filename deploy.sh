#!/usr/bin/bash

#build
npm run build

#deploy
firebase deploy --only hosting:islamapp
