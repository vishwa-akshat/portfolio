import { useState } from "react";

import "./style.scss";

export default function LoadingScreen({ setLoading }) {
  const [display, setDisplay] = useState(0);

  const Progress = () => {
    if (display > 99) {
      setLoading(false);
      clearInterval(Timer);
    }
    setDisplay((val) => (val > 99 ? val : val + 1));
  };
  const Timer = setInterval(Progress, 500);

  return (
    <div className="loading-screen">
      <span className="percentage">{display}%</span>
    </div>
  );
}
