#!/bin/bash

# si no estamos usando node v14, cambiar a esa
node -v | grep -q v14 || nvm use v14.21.3

npm run start