
import { motion } from "framer-motion";
import { Bookmark, Heart, MessageCircle, Share } from "lucide-react";

const Bookmarks = () => {
  const bookmarks = [
    {
      id: 1,
      user: {
        name: "Front Man",
        handle: "@frontman",
        avatar: "FM"
      },
      content: "The key to winning the glass bridge game is understanding probability. Each panel has a 50% chance of being tempered glass. Choose wisely.",
      likes: 3456,
      comments: 489,
      time: "2 days ago",
      category: "Strategy"
    },
    {
      id: 2,
      user: {
        name: "Player 001",
        handle: "@player001",
        avatar: "001"
      },
      content: "Remember when playing marbles: sometimes losing is actually winning. The true victory is in the connections we make.",
      image: "/images/bookmark-image.png",
      likes: 5921,
      comments: 732,
      time: "1 week ago",
      category: "Insights"
    },
    {
      id: 3,
      user: {
        name: "Player 067",
        handle: "@player067",
        avatar: "067"
      },
      content: "Survival tip: Forming alliances can help in group challenges, but remember everyone has their own agenda. Trust carefully.",
      likes: 2877,
      comments: 345,
      time: "2 weeks ago",
      category: "Strategy"
    },
  ];

  const categories = ["All", "Strategy", "Insights", "News", "Fan Theories"];

  // Animation variants
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
    <div className="space-y-6 pb-10">
      {/* Header */}
      <motion.div
        className="flex justify-between items-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h1 className="text-2xl font-bold font-squid text-squidRed mb-1 animate-glitch">BOOKMARKS</h1>
          <p className="text-muted-foreground">
            Posts and strategies you've saved for future reference
          </p>
        </div>
        <motion.button
          className="px-4 py-1.5 rounded-md border border-border flex items-center gap-2 hover:bg-accent/10 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Create Collection</span>
        </motion.button>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="flex flex-wrap gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              index === 0
                ? "bg-squidRed text-white"
                : "bg-muted hover:bg-muted/80"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Bookmarked Posts */}
      <motion.div
        className="space-y-4"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {bookmarks.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            className="border border-border rounded-lg p-4 bg-card hover:border-squidRed/30 transition-colors"
          >
            <div className="flex gap-3 mb-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-squidRed flex items-center justify-center text-white font-bold">
                {post.user.avatar}
              </div>

              {/* User info & content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <span className="font-medium">{post.user.name}</span>
                  <span className="text-muted-foreground text-sm">{post.user.handle}</span>
                  <span className="text-muted-foreground text-sm">·</span>
                  <span className="text-muted-foreground text-sm">{post.time}</span>
                  <span className="ml-auto">
                    <motion.button
                      className="text-squidRed"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Bookmark className="h-4 w-4 fill-squidRed" />
                    </motion.button>
                  </span>
                </div>

                <p className="mt-2">{post.content}</p>

                {post.image && (
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <img
                      src={post.image}
                      alt="Post content"
                      className="w-full h-auto"
                    />
                  </div>
                )}

                <div className="flex items-center gap-6 mt-4 text-muted-foreground text-sm">
                  <motion.button
                    className="flex items-center gap-1.5"
                    whileHover={{ color: "hsl(349, 83%, 57%)" }}
                  >
                    <Heart className="h-4 w-4" />
                    <span>{post.likes}</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-1.5"
                    whileHover={{ color: "hsl(137, 54%, 31%)" }}
                  >
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments}</span>
                  </motion.button>
                  <motion.button
                    className="flex items-center gap-1.5"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Share className="h-4 w-4" />
                  </motion.button>
                  <div className="ml-auto px-2 py-0.5 rounded-full bg-muted text-xs">
                    {post.category}
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

export default Bookmarks;
