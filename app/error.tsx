"use client";

interface ErrorPageProps {
  error: Error;
  reset: VoidFunction;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  console.log("Error: ", error);

  return (
    <>
      <div>An unexpected error occurred</div>
      <button className="btn" onClick={reset}>
        Retry
      </button>
    </>
  );
}
