import Tabs from "./components/tabs";
import logo from "./logo.svg";

function App() {
  return (
    <div className="flex justify-center w-full h-screen">
      <header className="">
        <img src={logo} className="" alt="logo" />
      </header>
      <main className="my-auto w-3/4 ">
        <div className="flex justify-left ">
          <div className="w-20">
            <img src={logo} alt="Kevin J Danis II" />
          </div>
          <div className="flex my-auto h-full">
            <p className="font-bold text-2xl my-auto">Kevin</p>
          </div>
        </div>

        <div>
          <Tabs />
        </div>
      </main>
    </div>
  );
}

export default App;
