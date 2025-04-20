
import { motion } from "framer-motion";

interface TrendingTopicProps {
  title: string;
  posts: string;
  category: string;
  isNew?: boolean;
}

const TrendingTopic = ({ title, posts, category, isNew = false }: TrendingTopicProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, backgroundColor: "rgba(0, 0, 0, 0.03)" }}
      className="p-3 rounded-lg cursor-pointer transition-colors"
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">{category}</span>
            {isNew && (
              <span className="text-xs bg-squidRed text-white px-1.5 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>
          <h3 className="font-bold text-gray-800 mt-1">{title}</h3>
          <p className="text-sm text-gray-500 mt-0.5">{posts} posts</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TrendingTopic;
