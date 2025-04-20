
import { motion } from "framer-motion";
import { Edit, Calendar, Award, Share2, MoreHorizontal } from "lucide-react";

const Profile = () => {
  const playerInfo = {
    name: "Player 456",
    handle: "@player456",
    bio: "Squid Game survivor | Strategy expert | Looking for allies | #FrontMan #GlassBridge #MarbleGame",
    joinDate: "October 2021",
    following: 67,
    followers: 456,
    level: "VIP Player",
    status: "Survived"
  };

  const posts = [
    {
      id: 1,
      content: "The key to surviving the glass bridge is simple mathematics and patience. Remember, 16 panels and a 1/2 chance for each...",
      likes: 2456,
      comments: 354,
      shares: 121,
      time: "3 days ago"
    },
    {
      id: 2,
      content: "In the marble game, the strategy isn't about winning. It's about understanding your opponent's psychology...",
      imageUrl: "/images/profile-post.png",
      likes: 1987,
      comments: 243,
      shares: 98,
      time: "1 week ago"
    }
  ];

  const tabVariants = {
    inactive: { borderColor: "transparent" },
    active: { borderColor: "hsl(349, 83%, 57%)" }
  };

  return (
    <div className="space-y-6 pb-10">
      {/* Profile Header */}
      <motion.div
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Banner */}
        <div className="h-40 rounded-lg overflow-hidden bg-gradient-to-r from-squidRed via-squidPink to-squidRed">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Avatar */}
        <div className="absolute -bottom-12 left-6">
          <div className="rounded-full border-4 border-background w-24 h-24 bg-squidRed flex items-center justify-center text-white text-3xl font-bold">
            456
          </div>
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <motion.button
            className="bg-muted text-foreground rounded-md px-4 py-1.5 text-sm font-medium border border-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 className="h-4 w-4" />
          </motion.button>
          <motion.button
            className="bg-muted text-foreground rounded-md px-4 py-1.5 text-sm font-medium border border-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MoreHorizontal className="h-4 w-4" />
          </motion.button>
          <motion.button
            className="bg-squidRed text-white rounded-md px-4 py-1.5 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-1.5">
              <Edit className="h-4 w-4" />
              Edit Profile
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Profile Info */}
      <motion.div
        className="pt-12 px-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold font-squid text-squidRed mb-1">{playerInfo.name}</h1>
        <p className="text-muted-foreground mb-2">{playerInfo.handle}</p>
        <p className="mb-3">{playerInfo.bio}</p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>Joined {playerInfo.joinDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="h-4 w-4 text-accent" />
            <span className="text-foreground">{playerInfo.status}</span>
          </div>
        </div>

        <div className="flex gap-5 mb-1">
          <div>
            <span className="font-bold">{playerInfo.following}</span>{" "}
            <span className="text-muted-foreground">Following</span>
          </div>
          <div>
            <span className="font-bold">{playerInfo.followers}</span>{" "}
            <span className="text-muted-foreground">Followers</span>
          </div>
        </div>

        <div className="mt-3 flex gap-2">
          <motion.div
            className="bg-squidRed text-white text-xs px-2 py-1 rounded"
            whileHover={{ scale: 1.05 }}
          >
            {playerInfo.level}
          </motion.div>
          <motion.div
            className="bg-squidGreen text-white text-xs px-2 py-1 rounded"
            whileHover={{ scale: 1.05 }}
          >
            {playerInfo.status}
          </motion.div>
        </div>
      </motion.div>

      {/* Tabs */}
      <motion.div
        className="border-b border-border flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <motion.button
          className="px-6 py-3 font-medium border-b-2 relative -mb-px"
          initial="inactive"
          animate="active"
          variants={tabVariants}
        >
          Posts
        </motion.button>
        <motion.button
          className="px-6 py-3 font-medium border-b-2 border-transparent text-muted-foreground"
          whileHover={{ color: "hsl(349, 83%, 57%)" }}
        >
          Media
        </motion.button>
        <motion.button
          className="px-6 py-3 font-medium border-b-2 border-transparent text-muted-foreground"
          whileHover={{ color: "hsl(349, 83%, 57%)" }}
        >
          Likes
        </motion.button>
      </motion.div>

      {/* Posts */}
      <motion.div
        className="space-y-6 pt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {posts.map((post, i) => (
          <motion.div
            key={post.id}
            className="border border-border rounded-lg p-4 bg-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + (i * 0.1), duration: 0.4 }}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-squidRed flex items-center justify-center text-white font-bold">
                456
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-medium">{playerInfo.name}</span>
                  <span className="text-muted-foreground text-sm">{playerInfo.handle}</span>
                  <span className="text-muted-foreground text-sm">·</span>
                  <span className="text-muted-foreground text-sm">{post.time}</span>
                </div>
                <p className="mt-1">{post.content}</p>
              </div>
            </div>

            {post.imageUrl && (
              <div className="rounded-lg overflow-hidden my-3">
                <img
                  src={post.imageUrl}
                  alt="Post visual"
                  className="w-full object-cover"
                />
              </div>
            )}

            <div className="flex justify-between text-muted-foreground pt-2">
              <motion.button
                className="flex items-center gap-1"
                whileHover={{ color: "hsl(349, 83%, 57%)" }}
              >
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </motion.button>
              <motion.button
                className="flex items-center gap-1"
                whileHover={{ color: "hsl(137, 54%, 31%)" }}
              >
                <MessageCircle className="h-4 w-4" />
                <span>{post.comments}</span>
              </motion.button>
              <motion.button
                className="flex items-center gap-1"
                whileHover={{ color: "hsl(47, 100%, 62%)" }}
              >
                <Repeat className="h-4 w-4" />
                <span>{post.shares}</span>
              </motion.button>
              <motion.button
                className="flex items-center gap-1"
                whileHover={{ scale: 1.1 }}
              >
                <Share className="h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Profile;

// Added for TypeScript
const Heart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
  </svg>
);

const Repeat = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path>
  </svg>
);

const Share = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>
  </svg>
);
