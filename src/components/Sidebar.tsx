
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Search, Bell, MessagesSquare, Bookmark, UserCircle, 
  Settings, PenSquare, Triangle, Circle, Square
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [username, setUsername] = useState("Player456");

  const navItems = [
    { path: "/", icon: <Home className="h-5 w-5" />, label: "Home" },
    { path: "/explore", icon: <Search className="h-5 w-5" />, label: "Explore" },
    { path: "/notifications", icon: <Bell className="h-5 w-5" />, label: "Notifications" },
    { path: "/messages", icon: <MessagesSquare className="h-5 w-5" />, label: "Messages" },
    { path: "/bookmarks", icon: <Bookmark className="h-5 w-5" />, label: "Bookmarks" },
    { path: "/profile", icon: <UserCircle className="h-5 w-5" />, label: "Profile" },
    { path: "/settings", icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ];

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: isMobile ? -300 : 0, opacity: isMobile ? 0 : 1 }
  };

  const overlayVariants = {
    open: { opacity: 0.5 },
    closed: { opacity: 0 }
  };

  const closeSidebar = () => {
    if (isMobile) setOpen(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && (
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 bg-black/20 z-40 backdrop-blur-sm"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={closeSidebar}
            />
          )}
        </AnimatePresence>
      )}

      {/* Sidebar */}
      <motion.aside
        className={cn(
          "bg-white border-r border-gray-200 flex flex-col h-screen z-50",
          isMobile ? "fixed w-64 shadow-xl" : "sticky top-0 w-64"
        )}
        initial="closed"
        animate={open || !isMobile ? "open" : "closed"}
        variants={sidebarVariants}
      >
        {/* Logo and Brand */}
        <div className="p-4 border-b border-gray-200">
          <Link to="/">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center gap-1">
                <div className="triangle"></div>
                <div className="circle"></div>
                <div className="square"></div>
              </div>
              <h1 className="text-xl font-bold font-squid text-squidRed animate-pulse-slow">
                SquidStories
              </h1>
            </motion.div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1 px-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeSidebar}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200",
                    location.pathname === item.path
                      ? "bg-primary/10 text-primary font-medium"
                      : "hover:bg-accent/10 text-gray-700"
                  )}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute right-0 w-1 h-6 bg-primary rounded-l-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Post Button */}
        <div className="p-4">
          <motion.button
            className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-full font-bold transition-colors flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PenSquare className="h-5 w-5" />
            <span>POST</span>
          </motion.button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-squidRed flex items-center justify-center text-white font-bold">
              {username[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate text-gray-800">{username}</p>
              <p className="text-sm text-gray-500 truncate">@player456</p>
            </div>
            <button className="text-gray-500">⋮</button>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
