import { useEffect, useState } from "react";
import "./App.css";
import gamehubService from "./services/gamehub-service";
import { Response, Game } from "./services/gamehub-modals";
import GameHubList from "./game-hub/game-list";
function App() {

  const [data, setData] = useState<Response<Game>>()

  useEffect(() => {
    gamehubService
      .getGames()
      .then((res)=>setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return <div className="container py-8 mx-auto text-white">
    <h1 className="pb-8 text-5xl font-semibold text-gray-100">Game Library</h1>
    <GameHubList data={data}></GameHubList>
  </div>;
}

export default App;
