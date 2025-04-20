
import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import NotificationsTab from "@/components/NotificationsTab";

const Notifications = () => {
  return (
    <div className="space-y-6">
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <Bell className="h-6 w-6 text-squidRed" />
          <h1 className="text-3xl font-bold font-squid">NOTIFICATIONS</h1>
        </div>
        <p className="text-muted-foreground mt-2">
          Stay updated with your game activities
        </p>
      </motion.div>

      <NotificationsTab />
    </div>
  );
};

export default Notifications;
