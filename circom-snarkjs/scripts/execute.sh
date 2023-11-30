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

echo "----- Semaphore V4 -----"
echo "----- Semaphore V4 Groth16 -----"
./scripts/executeGroth16.sh semaphore-v4
echo "----- Semaphore V4 Plonk -----"
./scripts/executePlonk.sh semaphore-v4 16
echo "----- Semaphore V4 Fflonk -----"
./scripts/executeFflonk.sh semaphore-v4 19

echo "----- Semaphore V4 EDDSA-----"
echo "----- Semaphore V4 EDDSA Groth16 -----"
./scripts/executeGroth16.sh semaphore-v4-eddsa 14
echo "----- Semaphore V4 EDDSA Plonk -----"
./scripts/executePlonk.sh semaphore-v4-eddsa 16
echo "----- Semaphore V4 EDDSA Fflonk -----"
./scripts/executeFflonk.sh semaphore-v4-eddsa 19