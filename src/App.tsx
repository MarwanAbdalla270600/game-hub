import { useEffect, useState } from "react";
import "./App.css";
import gamehubService from "./services/gamehub-service";
import { Response, Game } from "./services/gamehub-modals";
import GameHubList from "./game-hub/game-list";
import axios from "axios";

function App() {
  const [games, setGames] = useState<Game[]>([]);      // Initialize games as an empty array
  const [next, setNext] = useState<string>();          // Holds the next page URL

  useEffect(() => {
    gamehubService
      .getGames()
      .then((res) => {
        setGames(res.data.results);   // Set the first page of games
        setNext(res.data.next);       // Set the next page URL
      })
      .catch((err) => console.log(err));
  }, []);

  const loadMore = () => {
    if (next) {
      axios
        .get<Response<Game>>(next)
        .then((res) => {          
          setGames((prevGames) => [...prevGames, ...res.data.results]);
          setNext(res.data.next);  
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="container py-8 mx-auto text-white">
      <h1 className="pb-8 text-5xl font-semibold text-gray-100">
        Game Library
      </h1>
      <GameHubList data={games} onLoadMore={loadMore}></GameHubList>
    </div>
  );
}

export default App;
