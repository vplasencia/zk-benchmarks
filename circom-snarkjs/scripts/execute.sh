#!/bin/bash

echo "----- Remove build folder -----"
./scripts/removeBuildFolder.sh

echo "----- Sudoku -----"
echo "----- Sudoku Groth16 -----"
./scripts/executeGroth16.sh
echo "----- Sudoku Plonk -----"
./scripts/executePlonk.sh
echo "----- Sudoku Fflonk -----"
./scripts/executeFflonk.sh

echo "----- Semaphore -----"
echo "----- Semaphore Groth16 -----"
./scripts/executeGroth16.sh semaphore
echo "----- Semaphore Plonk -----"
./scripts/executePlonk.sh semaphore 16
echo "----- Semaphore Fflonk -----"
./scripts/executeFflonk.sh semaphore 19
