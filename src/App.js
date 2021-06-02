import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="text-center">Define It</h1>
          <h2 className="text-center">What would you like to search for?</h2>
        </header>
        <main>
          <SearchEngine />
        </main>
      </div>
    </div>
  );
}

export default App;
