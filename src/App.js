import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meal/Meal";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
