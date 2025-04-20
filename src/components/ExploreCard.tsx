
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ExploreCardProps {
  id: number;
  username: string;
  avatar: string;
  content: string;
  image?: string;
  likes: number;
  comments: number;
  shares: number;
  time: string;
  isLiked: boolean;
}

const ExploreCard = ({
  id,
  username,
  avatar,
  content,
  image,
  likes,
  comments,
  shares,
  time,
  isLiked: initialLiked = false
}: ExploreCardProps) => {
  const [liked, setLiked] = useState(initialLiked);
  const [likeCount, setLikeCount] = useState(likes);
  const { toast } = useToast();

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
      setLiked(false);
      toast({
        title: "Post unliked",
        description: `You removed your like from ${username}'s post`,
      });
    } else {
      setLikeCount(prev => prev + 1);
      setLiked(true);
      toast({
        title: "Post liked",
        description: `You liked ${username}'s post`,
      });
    }
  };

  const handleComment = () => {
    toast({
      title: "Comments",
      description: "Comments feature coming soon!",
    });
  };

  const handleShare = () => {
    toast({
      title: "Share",
      description: "Share feature coming soon!",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <img src={avatar} alt={username} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-gray-800">{username}</h3>
            <span className="text-sm text-gray-500">{time}</span>
          </div>
          <p className="mt-2 text-gray-700">{content}</p>
          {image && (
            <div className="mt-3 rounded-xl overflow-hidden">
              <img src={image} alt="Post content" className="w-full h-64 object-cover" />
            </div>
          )}
          <div className="flex items-center gap-6 mt-4">
            <motion.button 
              className={`flex items-center gap-2 ${liked ? 'text-squidRed' : 'text-gray-500'} hover:text-squidRed transition-colors`}
              onClick={handleLike}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart className={`h-5 w-5 ${liked ? 'fill-squidRed' : ''}`} />
              <span className="text-sm">{likeCount}</span>
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 text-gray-500 hover:text-squidGreen transition-colors"
              onClick={handleComment}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">{comments}</span>
            </motion.button>
            <motion.button 
              className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
              onClick={handleShare}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 className="h-5 w-5" />
              <span className="text-sm">{shares}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExploreCard;
