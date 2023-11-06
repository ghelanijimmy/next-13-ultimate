"use client";

import React from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  console.log(error);
  return (
    <>
      <div>An unexpected error occurred</div>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
    </>
  );
};

export default Error;
