#!/bin/bash

rsync --recursive --delete ../bin ../package.json ../package-lock.json tygr@$HOST:tygr-server

ssh tygr@$HOST 'bash -sl' < ./deploy_helper.sh
