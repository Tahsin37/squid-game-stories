import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const handleGameClick = (title: string) => {
    setSelectedGame(title);
    toast("Coming Soon!", {
      description: `${title} will be available in the next update!`,
      duration: 3000,
    });
  };

  const games = [
    {
      title: "Red Light, Green Light",
      description: "Test your timing and nerve in this deadly classic",
      image: "/images/game-redlight.png",
      difficulty: "Hard",
      players: "100+"
    },
    {
      title: "Glass Bridge",
      description: "Choose wisely, every step could be your last",
      image: "/images/game-bridge.png",
      difficulty: "Extreme",
      players: "50+"
    },
    {
      title: "Marble Game",
      description: "Strategy and deception in this intense showdown",
      image: "/images/game-marble.png",
      difficulty: "Medium",
      players: "75+"
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-6"
      >
        <BookOpen className="h-6 w-6 text-squidRed" />
        <h1 className="text-3xl font-bold font-squid">GAMES</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {games.map((game, index) => (
          <motion.div
            key={game.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.03 }}
            onClick={() => handleGameClick(game.title)}
            className="group overflow-hidden rounded-lg bg-white shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-squid mb-2 text-squidRed group-hover:animate-glitch">
                {game.title}
              </h3>
              <p className="text-muted-foreground mb-3">{game.description}</p>
              <div className="flex justify-between items-center">
                <span className={`px-2 py-1 rounded text-xs ${
                  game.difficulty === "Hard" ? "bg-squidRed" :
                  game.difficulty === "Extreme" ? "bg-squidBlack" : "bg-squidGreen"
                } text-white`}>
                  {game.difficulty}
                </span>
                <span className="text-sm text-muted-foreground">{game.players} Players</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Games;
