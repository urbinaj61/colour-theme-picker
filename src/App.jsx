import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
  return (
    <main>
      <h1>Theme Creator</h1>

      {initialColors.map(color => {
        return <Color key={color.id} color={color} />;
      })}
    </main>
  );
}

export default App;
