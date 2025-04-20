
import { motion } from "framer-motion";
import { Newspaper } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      title: "Glass Bridge Challenge Update",
      image: "/lovable-uploads/024d3dd2-34a9-48e6-a1df-b17d7d2a4ca6.png",
      content: "New safety measures implemented in the glass bridge challenge...",
      date: "2025-04-18"
    },
    {
      title: "Red Light, Green Light Records",
      image: "/lovable-uploads/b19f5a03-7434-4079-aab4-b4c8dc2a17af.png",
      content: "Breaking records in the most iconic game of the season...",
      date: "2025-04-17"
    },
    {
      title: "Marble Game Strategies",
      image: "/lovable-uploads/d7bbedb3-803c-4b17-b9c4-647c97927668.png",
      content: "Top players share their winning marble game strategies...",
      date: "2025-04-16"
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 mb-6"
      >
        <Newspaper className="h-6 w-6 text-squidRed" />
        <h1 className="text-3xl font-bold font-squid">NEWS</h1>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {newsItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="group relative overflow-hidden rounded-lg bg-card hover:bg-accent/5 transition-colors"
          >
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-squid mb-2 text-squidRed">{item.title}</h3>
              <p className="text-muted-foreground mb-2">{item.content}</p>
              <p className="text-sm text-muted-foreground">{item.date}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default News;
