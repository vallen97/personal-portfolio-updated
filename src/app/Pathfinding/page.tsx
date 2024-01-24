"use client";
import React, { Fragment, useEffect, useRef, useState } from "react";

export default function page() {
  let canvasRef: any = useRef();

  useEffect(() => {
    // labelSnakeScore.current.innerText = "eddit me";
  }, []);

  return (
    <div>
      <div className="py-4 grid grid-cols-1 place-items-center">
        <canvas
          // className="place-content-center"
          ref={canvasRef}
          height={300}
          width={300}
          style={{ borderColor: "black" }}
        />
      </div>
    </div>
  );
}

// export default page;
