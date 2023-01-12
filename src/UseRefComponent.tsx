import { useRef } from "react";

function UseRefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current?.insertAdjacentHTML("beforebegin", "123");
        }}
      >
        Focus on input
      </button>
    </div>
  );
}

export default UseRefComponent;
