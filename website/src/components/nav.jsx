import { Link, Routes, Route } from "react-router-dom";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Nav(props) {
  const { darkMode, toggleDarkMode } = props;

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex items-center ">
            <img
              src="/headshot.jpg"
              className="h-10 w-10 rounded-full mr-3 grayscale"
              alt="headshot"
            />
            <Link to="/" className="text-white font-bold text-xl">
              Kevin J Danis II
            </Link>
          </div>
          <div className="flex items-center justify-end h-16">
            <div className="flex ">
              <Link
                to="/projects"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Projects
              </Link>
              {/* <Link
                            to="/experience"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Experience
                        </Link>
                        <Link
                            to="/dashboard"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Dashboard
                        </Link> */}
            </div>
            <div className="w-16 flex justify-center">
              <button
                onClick={toggleDarkMode}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {darkMode ? (
                  <MoonIcon className="h-5 w-5" />
                ) : (
                  <SunIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
