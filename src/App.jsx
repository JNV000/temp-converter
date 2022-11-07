import useTemp from "./hooks/useTemp";
import Input from "./components/Input";

function App() {
  // get state from hook
  const { temps, dispatch } = useTemp();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <main className="bg-gray-100 p-8 rounded shadow">
        <h1 className="text-3xl font-bold underline">Temperature converter</h1>
        <div className="flex gap-x-4 justify-center">
          <Input
            id="celsius"
            value={temps.celsius}
            handleChange={(event) => {
              dispatch({ type: "SET_FAHRENHEIT", input: event.target.value });
            }}
          />
          <Input
            id="fahrenheit"
            value={temps.fahrenheit}
            handleChange={(event) => {
              dispatch({ type: "SET_CELSIUS", input: event.target.value });
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
