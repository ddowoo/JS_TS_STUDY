import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button> Click-me</button>
      <p>{count}</p>
    </>
  );
}

export default App;
