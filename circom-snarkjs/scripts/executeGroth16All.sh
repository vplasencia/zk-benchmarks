#!/bin/bash

echo "----- Remove build folder -----"
./scripts/removeBuildFolder.sh

echo "----- Sudoku -----"
echo "----- Sudoku Groth16 -----"
./scripts/executeGroth16.sh

echo "----- Semaphore -----"
echo "----- Semaphore Groth16 -----"
./scripts/executeGroth16.sh semaphore

echo "----- Semaphore V4 -----"
echo "----- Semaphore V4 Groth16 -----"
./scripts/executeGroth16.sh semaphore-v4

echo "----- Semaphore V4 EDDSA-----"
echo "----- Semaphore V4 EDDSA Groth16 -----"
./scripts/executeGroth16.sh semaphore-v4-eddsa 14
