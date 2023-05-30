import { run } from "/utils/runFunction";
const { fullProve: fullProveGroth16, verify: verifyGroth16 } =
  require("snarkjs").groth16;
const { fullProve: fullProvePlonk, verify: verifyPlonk } =
  require("snarkjs").plonk;
const { fullProve: fullProveFflonk, verify: verifyFflonk } =
  require("snarkjs").fflonk;
import vKeyGroth16 from "/public/zkproof/circom-snarkjs/semaphore/groth16/verification_key.json";
import vKeyPlonk from "/public/zkproof/circom-snarkjs/semaphore/plonk/verification_key.json";
import vKeyFflonk from "/public/zkproof/circom-snarkjs/semaphore/fflonk/verification_key.json";

import { Identity } from "@semaphore-protocol/identity";
import { Group } from "@semaphore-protocol/group";

import { BigNumber } from "@ethersproject/bignumber";
import { zeroPad } from "@ethersproject/bytes";
import { keccak256 } from "@ethersproject/keccak256";

export function hash(message) {
  message = BigNumber.from(message).toTwos(256).toHexString();
  message = zeroPad(message, 32);

  return BigInt(keccak256(message)) >> BigInt(8);
}

const identity = new Identity();
const group = new Group(1, 20, [identity.commitment]);

const index = group.indexOf(identity.commitment);
const merkleProof = group.generateMerkleProof(index);
const externalNullifier = group.id;
const signal = 1;

const input = {
  identityTrapdoor: identity.trapdoor,
  identityNullifier: identity.nullifier,
  treePathIndices: merkleProof.pathIndices,
  treeSiblings: merkleProof.siblings,
  externalNullifier: hash(externalNullifier),
  signalHash: hash(signal),
};

export async function semaphoreGroth16() {
  console.log("Semaphore Groth16");

  const wasmPath = "/zkproof/circom-snarkjs/semaphore/semaphore.wasm";

  const zkeyPath =
    "/zkproof/circom-snarkjs/semaphore/groth16/semaphore_final.zkey";

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

export async function semaphorePlonk() {
  console.log("Semaphore Plonk");

  const wasmPath = "/zkproof/circom-snarkjs/semaphore/semaphore.wasm";

  const zkeyPath =
    "/zkproof/circom-snarkjs/semaphore/plonk/semaphore_final.zkey";

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

export async function semaphoreFflonk() {
  console.log("Semaphore Fflonk");

  const wasmPath = "/zkproof/circom-snarkjs/semaphore/semaphore.wasm";

  const zkeyPath =
    "/zkproof/circom-snarkjs/semaphore/fflonk/semaphore_final.zkey";

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
