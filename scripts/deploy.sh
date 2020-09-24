#!/bin/bash

rsync --recursive --delete ../bin ../package.json ../package-lock.json tygr@tygr.tygr.info:tygr-server

ssh cron-push@cronpush.tygr.info 'bash -sl' < ./deploy_helper.sh
