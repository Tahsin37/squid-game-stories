
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const People = () => {
  const players = [
    {
      number: "456",
      status: "Active",
      image: "/images/player-456.png",
      wins: 5,
      type: "Veteran"
    },
    {
      number: "067",
      status: "Champion",
      image: "/images/player-067.png",
      wins: 8,
      type: "Expert"
    },
    {
      number: "218",
      status: "Active",
      image: "/images/player-218.png",
      wins: 3,
      type: "Strategist"
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-6"
      >
        <Users className="h-6 w-6 text-squidRed" />
        <h1 className="text-3xl font-bold font-squid">PLAYERS</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {players.map((player, index) => (
          <motion.div
            key={player.number}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.03 }}
            className="relative overflow-hidden rounded-lg bg-card hover:bg-accent/5 transition-all duration-300"
          >
            <div className="aspect-square overflow-hidden">
              <img
                src={player.image}
                alt={`Player ${player.number}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-2xl font-squid mb-1">#{player.number}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`inline-block w-2 h-2 rounded-full ${
                      player.status === "Champion" ? "bg-squidGreen" : "bg-squidRed"
                    }`} />
                    <span className="text-sm">{player.status}</span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-white/80">{player.type}</p>
                    <p className="text-sm text-white/80">Wins: {player.wins}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default People;
