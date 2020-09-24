#!/bin/bash

if [ -f ~/.bashrc ]; then
  . ~/.bashrc
fi

cd tygr-server
npm ci
npm test
sudo systemctl restart tygr-server
