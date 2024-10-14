import { Game } from "../services/gamehub-modals";

interface Props {
  game: Game;
}

function GameCard({ game }: { game: Game }) {
  return (
    <div className="flex flex-col w-full h-auto rounded-md shadow-xl card bg-bgCard">
      <img
        className="flex-1 object-cover w-full rounded-t-md"
        src={game.background_image}
      />
      <div className="px-2 py-8">
        <h3 className="text-2xl">{game.name}</h3>
        <p>{game.rating}/5</p>        
      </div>
    </div>
  );
}

export default GameCard;
