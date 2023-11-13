#!/bin/bash

# si no estamos usando node v14, cambiar a esa
node -v | grep -q v14 || nvm use v16.20.0

npm run start