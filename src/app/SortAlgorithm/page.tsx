"use client";
import React, { 
  useEffect,
  useRef,
  useState,
} from "react";
import { SortAlgorithm as sAlgorithm } from "../utils/sorting-algorithm";
import { Navbar } from "../componets/navbar";

export default function SortAlgorithm() {
  // export const Sortalgorithm: React.FC<> = ({}) => {
  let sliderSpeedRef: any = useRef();
  let sliderArraySizeRef: any = useRef();
  let canvasRef: any = useRef();

  let [currentSpeed, setCurrentSpeed] = useState(5);
  let [currentArraySize, setCurrentArraySize] = useState(25);
  let [algorithm, setAlgorithm] = useState<any>(new (class {})());
  // call setup

  let ctx: any;

  const buttonName: Array<string> = [
    "Selection Sort",
    "Bubble Sort",
    "Insertion Sort",
    "Quick Sort",
    "Comb Sort",
    "Random Array",
    "Reset Array",
  ];

  const sortFunction: Array<string> = [
    "selection",
    "bubble",
    "insert",
    "quick",
    "comb",
    "randomize",
    "reset",
  ];

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    setAlgorithm(sAlgorithm(canvasRef.current, ctx));
  }, []);

  return (
    <div className="px-8">
      <Navbar />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 p-4 mt-3">
        {buttonName.map((name: string, index: number) => (
          <button
            className="bg-materialUI-LightOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer text-materialUI-LightPrimaryContainer dark:text-materialUI-DarkPrimaryContainer font-semibold py-2 px-4 rounded"
            id={"btn" + name.replace(/ /g, "")}
            key={index.toString() + "btn"}
            onClick={() => {
              eval("algorithm.sort." + sortFunction[index] + "();");
            }}
          >
            {name}
          </button>
        ))}
      </div>
      <div className="px-5">
        <label className="block mb-2 text-sm font-medium text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer">
          Current Speed: {Math.pow(Number(currentSpeed), 3)} ms
        </label>
        <input
          ref={sliderSpeedRef}
          id="minmax-range"
          type="range"
          min="1"
          max="10"
          value={currentSpeed}
          className="w-full h-2  rounded-lg appearance-none cursor-pointer"
          aris-label={"Slider that adjust the speed of the sort algorithm"}
          onChange={(val: any) => {
            setCurrentSpeed(val.nativeEvent.target.value);
            algorithm.sort.setSpeed(
              Math.pow(Number(val.nativeEvent.target.value), 3)
            );
          }}
        />
      </div>
      <div className="px-5">
        <label className="block mb-2 text-sm font-medium  text-materialUI-LightOnPrimaryContainer bg-materialUI-LightPrimaryContainer dark:text-materialUI-DarkOnPrimaryContainer dark:bg-materialUI-DarkPrimaryContainer">
          Array Size: {currentArraySize}
        </label>
        <input
          ref={sliderArraySizeRef}
          id="minmax-range"
          type="range"
          min="10"
          max="100"
          value={currentArraySize}
          className="w-full h-2 bg-blackrounded-lg appearance-none cursor-pointer dark:bg-gray-900"
          aris-label={
            "Slider that adjust the number of random numbers the sort algorithm sorts"
          }
          onChange={(val: any) => {
            setCurrentArraySize(Number(val.nativeEvent.target.value));
            algorithm.sort.setArraySize(currentArraySize);
          }}
        />
      </div>
      <div className="grid place-items-center pt-5 ">
        <canvas ref={canvasRef} height={300} width={300} />
      </div>
    </div>
  );
}

// export default Sortalgorithm;
