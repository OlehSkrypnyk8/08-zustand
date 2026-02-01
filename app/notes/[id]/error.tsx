"use client";

interface ErrorProps {
  error: Error;
}

function Error({ error }: ErrorProps) {
  return (
    <div>
      <p>Something went wrong.</p>
      <pre>{error.message}</pre>
    </div>
  );
}
export default Error;
