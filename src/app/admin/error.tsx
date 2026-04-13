"use client";

function Error({error,reset}) {
  const retry = () => {
    reset();
  };

  return (
    <div>
      <h2 className="text-center">Xatolik sodir boldi!</h2>
      <h2>{error.message}</h2>
      <button
        className="bg-blue-500 p-2 cursor-pointer"
        onClick={retry}
      >
        Retry
      </button>
    </div>
  );
}

export default Error;