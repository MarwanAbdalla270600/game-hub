import GameCard from "../component-library/game-card";
import { Game } from "../services/gamehub-modals";
import { Response } from "../services/gamehub-modals";
function GameHubList({ data }: { data: Response<Game> | undefined }) {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {data?.results?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
      <button className="mx-auto border-0 btn btn-neutral bg-bgCard">load more</button>
    </div>
  );
}

export default GameHubList;
