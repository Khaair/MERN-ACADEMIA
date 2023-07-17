import React, { useState } from "react";
import DayNightToggle from "react-day-and-night-toggle";

const Animation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  setTimeout(function () {
    setIsDarkMode(!isDarkMode);
  }, 2000); //wait 2 seconds

  return (
    <div className="text-center">
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
        <div className="DayNightToggle pt-5">
          <DayNightToggle
            onChange={() => setIsDarkMode(!isDarkMode)}
            checked={isDarkMode}
          />
        </div>
        <h1>Day and Night Toggle</h1>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Animation;
