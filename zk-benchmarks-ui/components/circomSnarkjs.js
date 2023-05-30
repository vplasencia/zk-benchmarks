import SudokuComponent from "./circom-snarkjs/sudokuComponent";
import SemaphoreComponent from "./circom-snarkjs/semaphoreComponent";

export default function CircomSnarkjs() {
  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <div className="text-center font-semibold text-3xl">Circom-Snarkjs</div>
      </div>
      <div>
        <SudokuComponent />
      </div>
      <div className="pt-20">
        <SemaphoreComponent />
      </div>
    </div>
  );
}
