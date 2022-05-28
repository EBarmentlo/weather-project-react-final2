import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Hello! Type a city you would like to know the weather for.</h1>
        <Weather />
      </header>
    </div>
  );
}

export default App;
