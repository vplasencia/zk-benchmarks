import React, { useEffect, useState } from "react";
import {
  sudokuGroth16,
  sudokuPlonk,
  sudokuFflonk,
} from "../../zkproof/circom-snarkjs/snarkjsSudoku";
export default function SudokuComponent() {
  const [sudokuGroth16Result, setSudokuGroth16Result] = useState({});
  const [sudokuPlonkResult, setSudokuPlonkResult] = useState({});
  const [sudokuFflonkResult, setSudokuFflonkResult] = useState({});

  const runSudoku = async () => {
    const sudokuGroth16Res = await sudokuGroth16();
    setSudokuGroth16Result(sudokuGroth16Res);
    const sudokuPlonkRes = await sudokuPlonk();
    setSudokuPlonkResult(sudokuPlonkRes);
    const sudokuFflonkRes = await sudokuFflonk();
    setSudokuFflonkResult(sudokuFflonkRes);
  };

  return (
    <div>
      <div className="text-center mb-5 text-2xl font-semibold">Sudoku</div>
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
                      {sudokuGroth16Result.timeProve
                        ? sudokuGroth16Result.timeProve
                        : "-"}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {sudokuPlonkResult.timeProve
                        ? sudokuPlonkResult.timeProve
                        : "-"}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {sudokuFflonkResult.timeProve
                        ? sudokuFflonkResult.timeProve
                        : "-"}
                    </td>
                  </tr>
                  <tr className="bg-slate-800 border-b border-slate-600">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      Verification time (ms)
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {sudokuGroth16Result.timeVerify
                        ? sudokuGroth16Result.timeVerify
                        : "-"}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {sudokuPlonkResult.timeVerify
                        ? sudokuPlonkResult.timeVerify
                        : "-"}
                    </td>
                    <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                      {sudokuFflonkResult.timeVerify
                        ? sudokuFflonkResult.timeVerify
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
          onClick={runSudoku}
          className="rounded-md bg-blue-700 py-2 px-5 font-bold hover:bg-blue-600 transition-colors duration-150"
        >
          Run Sudoku
        </button>
      </div>
    </div>
  );
}
