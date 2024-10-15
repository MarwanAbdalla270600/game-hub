import GameCard from "../component-library/game-card";
import { Game } from "../services/gamehub-modals";

interface Props {
  data: Game[] | undefined
  isLoading: boolean
  onLoadMore: () => void
}

function GameHubList({ data, isLoading, onLoadMore }: Props) {
  return (
    <div className="flex flex-col justify-center gap-8">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 gap-y-8">
        {data?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>

      {!isLoading && <button onClick={onLoadMore} className="mx-auto border-0 btn btn-neutral bg-bgCard">load more</button>}
      {isLoading && <span className="mx-auto loading loading-spinner loading-lg"></span>}

    </div>
  );
}

export default GameHubList;
