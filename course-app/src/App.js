import "./App.css";
import Header from "./Header";
import { games } from "./Data";
import Games from "./Components/Games";
import "./css/Games.css";

function App() {
  return (
    <div>
      <Header />
      <div className="games-main">
        {games?.map((game) => (
          <Games key={game.id} games={game} />
        ))}
      </div>
    </div>
  );
}

export default App;
