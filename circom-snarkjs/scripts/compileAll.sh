#!/bin/bash

echo "----- Remove build folder -----"
./scripts/removeBuildFolder.sh

echo "----- Sudoku -----"
echo "----- Compile Sudoku -----"
./scripts/compile.sh


echo "----- Semaphore -----"
echo "----- Compile Semaphore -----"
./scripts/compile.sh semaphore


echo "----- Semaphore V4 -----"
echo "----- Compile Semaphore V4 -----"
./scripts/compile.sh semaphore-v4


echo "----- Semaphore V4 EDDSA-----"
echo "----- Compile Semaphore V4 EDDSA -----"
./scripts/compile.sh semaphore-v4-eddsa
