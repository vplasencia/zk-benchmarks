import React, { useEffect, useState } from "react";
import {
  semaphoreGroth16,
  semaphorePlonk,
  semaphoreFflonk,
} from "../../zkproof/circom-snarkjs/snarkjsSemaphore";
export default function SemaphoreComponent() {
  const [semaphoreGroth16Result, setSemaphoreGroth16Result] = useState({});
  const [semaphorePlonkResult, setSemaphorePlonkResult] = useState({});
  const [semaphoreFflonkResult, setSemaphoreFflonkResult] = useState({});

  const runSemaphore = async () => {
    const semaphoreGroth16Res = await semaphoreGroth16();
    setSemaphoreGroth16Result(semaphoreGroth16Res);
    const semaphorePlonkRes = await semaphorePlonk();
    setSemaphorePlonkResult(semaphorePlonkRes);
    const semaphoreFflonkRes = await semaphoreFflonk();
    setSemaphoreFflonkResult(semaphoreFflonkRes);
  };

  return (
    <div>
      <div className="text-center mb-5 text-2xl font-semibold">Semaphore</div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-slate-700 border-b border-slate-600">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      <div>Feature/</div>
                      <div>Proving system</div>
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      Groth16
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      Plonk
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium px-6 py-4 text-left"
                    >
                      Fflonk
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-slate-800 border-b border-slate-600">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      Proving time (ms)
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {semaphoreGroth16Result.timeProve
                        ? semaphoreGroth16Result.timeProve
                        : "-"}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {semaphorePlonkResult.timeProve
                        ? semaphorePlonkResult.timeProve
                        : "-"}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {semaphoreFflonkResult.timeProve
                        ? semaphoreFflonkResult.timeProve
                        : "-"}
                    </td>
                  </tr>
                  <tr className="bg-slate-800 border-b border-slate-600">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      Verification time (ms)
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {semaphoreGroth16Result.timeVerify
                        ? semaphoreGroth16Result.timeVerify
                        : "-"}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {semaphorePlonkResult.timeVerify
                        ? semaphorePlonkResult.timeVerify
                        : "-"}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {semaphoreFflonkResult.timeVerify
                        ? semaphoreFflonkResult.timeVerify
                        : "-"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-5">
        <button
          onClick={runSemaphore}
          className="rounded-md bg-blue-700 py-2 px-5 font-bold hover:bg-blue-600 transition-colors duration-150"
        >
          Run Semaphore
        </button>
      </div>
    </div>
  );
}
