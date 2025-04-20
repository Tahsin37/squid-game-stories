import { motion } from "framer-motion";
import { ChevronRight, TrendingUp, Users, BookOpen, Newspaper, Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const popularGames = [
    { 
      id: 1, 
      title: "Red Light, Green Light",
      image: "/images/images (1).jpg",
      players: "128K" 
    },
    { 
      id: 2, 
      title: "Glass Bridge Challenge",
      image: "/images/images (2).jpg",
      players: "98K" 
    },
    { 
      id: 3, 
      title: "Marble Game",
      image: "/images/images (3).jpg",
      players: "87K" 
    }
  ];

  const sections = [
    { 
      id: "people",
      title: "PEOPLE",
      icon: Users,
      description: "Connect with other players",
      image: "/images/images (4).jpg"
    },
    { 
      id: "games",
      title: "GAMES",
      icon: BookOpen,
      description: "Explore all game challenges",
      image: "/images/images (5).jpg"
    },
    { 
      id: "news",
      title: "NEWS",
      icon: Newspaper,
      description: "Latest updates and strategies",
      image: "/images/images.jpg"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="space-y-8 pb-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative h-[300px] rounded-xl overflow-hidden mb-8"
      >
        <img 
          src="/images/image.jpg"
          alt="Squid Game"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
          <div className="text-white">
            <h1 className="text-4xl font-bold font-squid mb-2 animate-glitch">
              WELCOME TO SQUIDSTORIES
            </h1>
            <p className="text-lg text-white/80">
              Share your journey, connect with players, master the games
            </p>
          </div>
        </div>
      </motion.div>

      {/* Search */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="Search games, players, or strategies..."
            className="w-full px-4 py-3 rounded-full border border-border bg-card focus:outline-none focus:ring-2 focus:ring-squidRed transition-all"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
            <Search className="text-muted-foreground h-5 w-5" />
          </div>
        </div>
      </motion.div>

      {/* Main Sections */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {sections.map((section) => (
          <motion.div
            key={section.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="relative h-[200px] rounded-xl overflow-hidden cursor-pointer"
            onClick={() => navigate(`/${section.id}`)}
          >
            <img 
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent hover:from-squidRed/80 transition-all duration-300">
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <section.icon className="h-5 w-5" />
                  <h2 className="text-xl font-bold font-squid">{section.title}</h2>
                </div>
                <p className="text-sm text-white/80">{section.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Popular Games */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-squidRed" />
            <h2 className="text-xl font-bold font-squid">POPULAR GAMES</h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="text-squidRed font-squid text-sm flex items-center gap-1"
          >
            View All <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {popularGames.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ scale: 1.02 }}
              className="relative h-[150px] rounded-lg overflow-hidden cursor-pointer"
            >
              <img 
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-squid">{game.title}</h3>
                  <p className="text-xs text-white/80">{game.players} players</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
