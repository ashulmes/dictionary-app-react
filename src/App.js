import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="row">
          <header className="App-header">
            <h1 className="text-center">define it</h1>
            <h2 className="text-center">What would you like to search for?</h2>
          </header>
        </div>
        <main>
          <SearchEngine />
        </main>
      </div>
    </div>
  );
}

export default App;
