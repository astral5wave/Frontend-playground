import React from "react";

const ToggleTheme = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme"));
  const handleToggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  const isLight = theme === "light" ? true : false;
  React.useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) setTheme(localTheme);
  }, []);
  return (
    <div
      className="h-screen w-screen transition-colors duration-300"
      style={{ backgroundColor: isLight ? "white" : "black" }}
    >
      <div className="h-screen w-1/2 flex flex-col items-center justify-center-safe gap-10">
        <h1
          className="text-8xl font-mono text-center transition-colors duration-300"
          style={{ color: isLight ? "black" : "white" }}
        >
          Hello World!
        </h1>
        <button
          className=" px-4 py-2 rounded-md shadow-md font-medium shadow-gray-400 transition-colors duration-300 cursor-pointer"
          style={{ color: isLight ? "white" : "black", backgroundColor:isLight?"black":"white" }}
          onClick={handleToggleTheme}
        >
          Toggle Theme
        </button>
      </div>
    </div>
  );
};

export default ToggleTheme;
