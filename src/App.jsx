import Input from "./components/Input";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <main className="bg-gray-100 p-8 rounded shadow">
        <h1 className="text-3xl font-bold underline">Temperature converter</h1>
        <div className="flex gap-x-4 justify-center">
          <Input id="celsius" />
          <Input id="celsius" />
        </div>
      </main>
    </div>
  );
}

export default App;
