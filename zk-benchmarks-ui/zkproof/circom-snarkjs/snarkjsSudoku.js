import { run } from "/utils/runFunction";
const { fullProve: fullProveGroth16, verify: verifyGroth16 } =
  require("snarkjs").groth16;
const { fullProve: fullProvePlonk, verify: verifyPlonk } =
  require("snarkjs").plonk;
const { fullProve: fullProveFflonk, verify: verifyFflonk } =
  require("snarkjs").fflonk;
import vKeyGroth16 from "/public/zkproof/circom-snarkjs/sudoku/groth16/verification_key.json";
import vKeyPlonk from "/public/zkproof/circom-snarkjs/sudoku/plonk/verification_key.json";
import vKeyFflonk from "/public/zkproof/circom-snarkjs/sudoku/fflonk/verification_key.json";

const input = {
  unsolved: [
    [0, 0, 0, 0, 0, 6, 0, 0, 0],
    [0, 0, 7, 2, 0, 0, 8, 0, 0],
    [9, 0, 6, 8, 0, 0, 0, 1, 0],
    [3, 0, 0, 7, 0, 0, 0, 2, 9],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 5, 0, 0, 0, 7, 0],
    [6, 5, 0, 1, 0, 0, 0, 0, 0],
    [8, 0, 1, 0, 5, 0, 3, 0, 0],
    [7, 9, 2, 0, 0, 0, 0, 0, 4],
  ],
  solved: [
    [1, 8, 4, 3, 7, 6, 2, 9, 5],
    [5, 3, 7, 2, 9, 1, 8, 4, 6],
    [9, 2, 6, 8, 4, 5, 7, 1, 3],
    [3, 6, 5, 7, 1, 8, 4, 2, 9],
    [2, 7, 8, 4, 6, 9, 5, 3, 1],
    [4, 1, 9, 5, 3, 2, 6, 7, 8],
    [6, 5, 3, 1, 2, 4, 9, 8, 7],
    [8, 4, 1, 9, 5, 7, 3, 6, 2],
    [7, 9, 2, 6, 8, 3, 1, 5, 4],
  ],
};

export async function sudokuGroth16() {
  console.log("Sudoku Groth16");

  const wasmPath = "/zkproof/circom-snarkjs/sudoku/sudoku.wasm";

  const zkeyPath = "/zkproof/circom-snarkjs/sudoku/groth16/sudoku_final.zkey";

  const [{ proof, publicSignals }, timeProve] = await run(async () => {
    return await fullProveGroth16(input, wasmPath, zkeyPath);
  });
  console.log("Proving time", timeProve);
  const [result, timeVerify] = await run(async () => {
    return await verifyGroth16(vKeyGroth16, publicSignals, proof);
  });
  console.log("Verification time", timeVerify);
  console.log("Result", result);
  return { timeProve: timeProve, timeVerify: timeVerify, result: result };
}

export async function sudokuPlonk() {
  console.log("Sudoku Plonk");

  const wasmPath = "/zkproof/circom-snarkjs/sudoku/sudoku.wasm";

  const zkeyPath = "/zkproof/circom-snarkjs/sudoku/plonk/sudoku_final.zkey";

  const [{ proof, publicSignals }, timeProve] = await run(async () => {
    return await fullProvePlonk(input, wasmPath, zkeyPath);
  });
  console.log("Proving time", timeProve);
  const [result, timeVerify] = await run(async () => {
    return await verifyPlonk(vKeyPlonk, publicSignals, proof);
  });
  console.log("Verification time", timeVerify);
  console.log("Result", result);
  return { timeProve: timeProve, timeVerify: timeVerify, result: result };
}

export async function sudokuFflonk() {
  console.log("Sudoku Fflonk");

  const wasmPath = "/zkproof/circom-snarkjs/sudoku/sudoku.wasm";

  const zkeyPath = "/zkproof/circom-snarkjs/sudoku/fflonk/sudoku_final.zkey";

  const [{ proof, publicSignals }, timeProve] = await run(async () => {
    return await fullProveFflonk(input, wasmPath, zkeyPath);
  });
  console.log("Proving time", timeProve);
  const [result, timeVerify] = await run(async () => {
    return await verifyFflonk(vKeyFflonk, publicSignals, proof);
  });
  console.log("Verification time", timeVerify);
  console.log("Result", result);
  return { timeProve: timeProve, timeVerify: timeVerify, result: result };
}
