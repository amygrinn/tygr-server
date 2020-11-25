#!/bin/bash

cd tygr-server
npm ci
# npm test
sudo systemctl restart tygr-server
