import { motion } from "framer-motion";
import { Search, TrendingUp, Heart, MessageCircle, Share2 } from "lucide-react";
import ExploreCard from "@/components/ExploreCard";
import TrendingTopic from "@/components/TrendingTopic";

const Explore = () => {
  const posts = [
    {
      id: 1,
      username: "Front Man",
      avatar: "/images/images (1).jpg",
      content: "The next game begins soon. Are you ready?",
      image: "/images/images (1).jpg",
      likes: 1234,
      comments: 456,
      shares: 789,
      time: "2h ago",
      isLiked: false
    },
    {
      id: 2,
      username: "Player 067",
      avatar: "/images/images (2).jpg",
      content: "Trust no one. Play smart.",
      image: "/images/images (2).jpg",
      likes: 987,
      comments: 321,
      shares: 154,
      time: "4h ago",
      isLiked: true
    },
    {
      id: 3,
      username: "Player 001",
      avatar: "/images/images (3).jpg",
      content: "Would you like to play a game with me? I promise it will be fun.",
      image: "/images/images (1).jpg",
      likes: 756,
      comments: 210,
      shares: 89,
      time: "6h ago",
      isLiked: false
    },
    {
      id: 4,
      username: "Player 218",
      avatar: "/images/images (1).jpg",
      content: "Always calculate your odds before making a move. Strategy is everything.",
      image: "/images/images (3).jpg",
      likes: 543,
      comments: 176,
      shares: 67,
      time: "8h ago",
      isLiked: false
    },
    {
      id: 5,
      username: "Player 199",
      avatar: "/images/images (4).jpg",
      content: "Friendship can be found in the most unexpected places.",
      image: "/images/images (5).jpg",
      likes: 892,
      comments: 345,
      shares: 123,
      time: "10h ago",
      isLiked: false
    },
    {
      id: 6,
      username: "VIP Host",
      avatar: "/images/images (5).jpg",
      content: "The VIPs are watching with great interest. Put on a good show.",
      image: "/images/images (1).jpg",
      likes: 432,
      comments: 98,
      shares: 45,
      time: "12h ago",
      isLiked: false
    },
    {
      id: 7,
      username: "Masked Guard",
      avatar: "/images/images (2).jpg",
      content: "All players, please proceed to the next round.",
      image: "/images/images (2).jpg",
      likes: 321,
      comments: 67,
      shares: 22,
      time: "1h ago",
      isLiked: false
    },
    {
      id: 8,
      username: "Player 456",
      avatar: "/images/images (2).jpg",
      content: "Never give up, even when the odds are against you.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8uI7LUJLN4Kf0w_rprIr9YdPSHD3Spl8uwQ&s",
      likes: 654,
      comments: 123,
      shares: 56,
      time: "3h ago",
      isLiked: true
    },
    {
      id: 9,
      username: "Game Designer",
      avatar: "/images/images (4).jpg",
      content: "The games are designed to test not just physical ability, but mental fortitude as well.",
      image: "/images/images (4).jpg",
      likes: 789,
      comments: 234,
      shares: 78,
      time: "5h ago",
      isLiked: false
    },
    // --- More tweets with images  ---
    {
      id: 10,
      username: "VIP Guest",
      avatar: "/images/images (5).jpg",
      content: "Enjoying the show from the VIP lounge.",
      image: "/images/images (3).jpg",
      likes: 321,
      comments: 45,
      shares: 12,
      time: "15m ago",
      isLiked: false
    },
    {
      id: 11,
      username: "Player 101",
      avatar: "/images/images (1).jpg",
      content: "Every round is a new chance to survive.",
      image: "/images/images (4).jpg",
      likes: 210,
      comments: 34,
      shares: 9,
      time: "20m ago",
      isLiked: false
    },
    {
      id: 12,
      username: "Guard",
      avatar: "/images/images (2).jpg",
      content: "Order must be maintained at all times.",
      image: "/images/images (5).jpg",
      likes: 150,
      comments: 20,
      shares: 5,
      time: "30m ago",
      isLiked: false
    }
  ];

  const trendingTopics = [
    {
      title: "Red Light, Green Light",
      posts: "12.5K",
      category: "Games",
      isNew: true
    },
    {
      title: "Marble Game Strategies",
      posts: "8.2K",
      category: "Strategy",
      isNew: false
    },
    {
      title: "Tug-of-War",
      posts: "6.7K",
      category: "Games",
      isNew: false
    },
    {
      title: "Glass Bridge",
      posts: "5.9K",
      category: "Games",
      isNew: true
    },
    {
      title: "Final Game",
      posts: "4.3K",
      category: "Discussions",
      isNew: false
    }
  ];

  return (
    <div className="flex gap-4">
      {/* Trending Topics - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:block w-1/3 sticky top-4 h-[calc(100vh-2rem)]"
      >
        <div className="bg-white shadow-md border border-gray-200 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-squidRed" />
            <h2 className="text-xl font-bold text-gray-800">Trending Topics</h2>
          </div>

          <div className="space-y-1">
            {trendingTopics.map((topic, index) => (
              <TrendingTopic
                key={index}
                title={topic.title}
                posts={topic.posts}
                category={topic.category}
                isNew={topic.isNew}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content - Feed */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-0 z-10 bg-white shadow-sm p-4 rounded-lg mb-4 border border-gray-200"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search posts..."
              className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-squidRed text-gray-800"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </motion.div>

        <div className="space-y-4">
          {posts.map((post) => (
            <ExploreCard key={post.id} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
