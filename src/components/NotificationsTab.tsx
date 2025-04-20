
import { motion } from "framer-motion";
import { Bell, Heart, AtSign } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const NotificationsTab = () => {
  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="all" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          All
        </TabsTrigger>
        <TabsTrigger value="mentions" className="flex items-center gap-2">
          <AtSign className="h-4 w-4" />
          Mentions
        </TabsTrigger>
        <TabsTrigger value="likes" className="flex items-center gap-2">
          <Heart className="h-4 w-4" />
          Likes
        </TabsTrigger>
      </TabsList>

      <TabsContent value="all" className="space-y-4">
        {/* Render all notifications */}
        <NotificationItem 
          type="like"
          user="Player 067"
          action="liked your post"
          time="2m ago"
        />
        <NotificationItem 
          type="mention"
          user="Front Man"
          action="mentioned you"
          time="5m ago"
        />
      </TabsContent>

      <TabsContent value="mentions" className="space-y-4">
        {/* Render only mentions */}
        <NotificationItem 
          type="mention"
          user="Front Man"
          action="mentioned you"
          time="5m ago"
        />
      </TabsContent>

      <TabsContent value="likes" className="space-y-4">
        {/* Render only likes */}
        <NotificationItem 
          type="like"
          user="Player 067"
          action="liked your post"
          time="2m ago"
        />
      </TabsContent>
    </Tabs>
  );
};

const NotificationItem = ({ type, user, action, time }: {
  type: "like" | "mention";
  user: string;
  action: string;
  time: string;
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${
          type === "like" ? "bg-pink-100" : "bg-blue-100"
        }`}>
          {type === "like" ? (
            <Heart className="h-4 w-4 text-squidRed" />
          ) : (
            <AtSign className="h-4 w-4 text-blue-500" />
          )}
        </div>
        <div className="flex-1">
          <p className="text-sm">
            <span className="font-bold">{user}</span> {action}
          </p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationsTab;
