import { useEffect, useState } from "react";

const SceenSize = () => {
  const [windoWidth, setwindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div>{windoWidth}</div>
    </>
  );
};

export default SceenSize;
