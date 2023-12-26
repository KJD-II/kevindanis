
import Nav from "../components/nav";
import { Outlet} from "react-router-dom";


import React, {useState} from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
}


  return (
    
    <div className={`flex-1 justify-center w-full h-full
    ${darkMode ? "dark" : "light"}`}>
        <Nav darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}  />

      <main className="dark:bg-slate-500 bg-slate-100 w-full h-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;