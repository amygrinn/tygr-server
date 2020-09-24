#!/bin/bash

rsync --recursive --delete $cwd/../bin $cwd/../package.json $cwd/../package-lock.json tygr@$HOST:tygr-server

ssh tygr@$HOST 'bash -sl' < $cwd/deploy_helper.sh
