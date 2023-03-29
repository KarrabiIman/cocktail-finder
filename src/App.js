import "./App.css";
import CocktailSearch from "./ui-components/CocktailSearch";

function App() {
  return (
    <main className="App">
      <header className="App-header">
        <h2>Find a cocktail by name</h2>
        <CocktailSearch />
      </header>
    </main>
  );
}

export default App;
