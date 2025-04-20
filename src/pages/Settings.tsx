import { useState } from "react";
import { motion } from "framer-motion";
import { User, Palette, Bell, Lock, Globe, Info, Moon, Sun } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#EA384C");
  const { toast } = useToast();

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    document.documentElement.style.setProperty('--primary', color);
    toast({
      title: "Theme Updated",
      description: "Theme color has been changed successfully!",
    });
  };

  const sections = [
    {
      id: "account",
      icon: <User className="h-5 w-5 text-squidRed" />,
      title: "ACCOUNT",
      fields: [
        { label: "Username", value: "player456", type: "text" },
        { label: "Email", value: "player456@squidgame.com", type: "email" },
        { label: "Password", value: "••••••••", type: "password", action: "Change Password" }
      ]
    },
    {
      id: "appearance",
      icon: <Palette className="h-5 w-5 text-squidRed" />,
      title: "APPEARANCE",
      themeToggle: true,
      colors: [
        { hex: "#EA384C", name: "Squid Red" },
        { hex: "#21A675", name: "Squid Green" },
        { hex: "#FFD600", name: "Gold" },
        { hex: "#9747FF", name: "Purple" },
        { hex: "#0085FF", name: "Blue" }
      ]
    },
    {
      id: "notifications",
      icon: <Bell className="h-5 w-5 text-squidRed" />,
      title: "NOTIFICATIONS",
      toggles: [
        { label: "Push Notifications", description: "Receive alerts on your device", enabled: true },
        { label: "Likes and reactions", enabled: true },
        { label: "Comments and replies", enabled: true },
        { label: "New followers", enabled: false },
        { label: "Mentions and tags", enabled: true },
        { label: "News and updates", enabled: false }
      ]
    },
    {
      id: "privacy",
      icon: <Lock className="h-5 w-5 text-squidRed" />,
      title: "PRIVACY & SAFETY",
      toggles: [
        { label: "Private Account", description: "Only approved followers can see your posts", enabled: false },
        { label: "Location Sharing", description: "Allow others to see your location", enabled: false }
      ],
      actions: [
        { label: "Configure", description: "Control who can tag you" },
        { label: "Manage Blocked Accounts", description: "Manage the accounts you've blocked" }
      ]
    },
    {
      id: "language",
      icon: <Globe className="h-5 w-5 text-squidRed" />,
      title: "LANGUAGE",
      select: {
        label: "App Language",
        description: "This will change the language for the entire application",
        options: ["English", "Korean", "Japanese", "Spanish", "French", "German"],
        selected: "English"
      },
      toggles: [
        { label: "Translation", description: "Automatically translate posts to your language", enabled: true }
      ]
    },
    {
      id: "about",
      icon: <Info className="h-5 w-5 text-squidRed" />,
      title: "ABOUT",
      info: [
        { label: "SquidStories v1.0.0" },
        { label: "© 2023 SquidStories. All rights reserved." }
      ],
      links: [
        { label: "Terms of Service" },
        { label: "Privacy Policy" },
        { label: "Cookie Preferences" }
      ]
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
      <motion.div 
        className="mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold font-squid text-squidRed mb-2 animate-glitch">SETTINGS</h1>
        <p className="text-muted-foreground">
          Customize your SquidStories experience!
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        {sections.map((section) => (
          <motion.div
            key={section.id}
            variants={item}
            className="border border-border rounded-lg overflow-hidden bg-card"
          >
            <div className="bg-muted p-4 flex items-center gap-2 border-b border-border">
              {section.icon}
              <h2 className="font-squid text-lg">{section.title}</h2>
            </div>
            
            <div className="p-4">
              {section.fields && (
                <div className="space-y-4">
                  {section.fields.map((field, idx) => (
                    <div key={idx} className="flex flex-col space-y-1.5">
                      <label className="text-sm font-medium">{field.label}</label>
                      <div className="flex">
                        <input
                          type={field.type}
                          value={field.value}
                          readOnly
                          className="flex-1 px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                        {field.action && (
                          <motion.button
                            className="ml-2 px-3 py-1 bg-squidRed text-white rounded-md text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {field.action}
                          </motion.button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {section.themeToggle && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Dark Mode</h3>
                      <p className="text-sm text-muted-foreground">Switch between light and dark themes</p>
                    </div>
                    <motion.button
                      className={`w-12 h-6 rounded-full flex items-center ${
                        darkMode ? "bg-squidRed justify-end" : "bg-muted-foreground justify-start"
                      } p-1 transition-all duration-200`}
                      onClick={() => setDarkMode(!darkMode)}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div 
                        className="w-4 h-4 rounded-full bg-white flex items-center justify-center"
                        layout
                      >
                        {darkMode ? (
                          <Moon className="h-3 w-3 text-squidRed" />
                        ) : (
                          <Sun className="h-3 w-3 text-muted-foreground" />
                        )}
                      </motion.div>
                    </motion.button>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-2">Color Theme</h3>
                    <div className="flex gap-3">
                      {section.colors?.map((color, idx) => (
                        <motion.button
                          key={idx}
                          className={`w-10 h-10 rounded-full border-2 ${
                            selectedColor === color.hex ? 'border-squidRed' : 'border-border'
                          }`}
                          style={{ backgroundColor: color.hex }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleColorChange(color.hex)}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {section.toggles && (
                <div className="space-y-4">
                  {section.toggles.map((toggle, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{toggle.label}</h3>
                        {toggle.description && (
                          <p className="text-sm text-muted-foreground">{toggle.description}</p>
                        )}
                      </div>
                      <motion.button
                        className={`w-12 h-6 rounded-full flex items-center ${
                          toggle.enabled ? "bg-squidRed justify-end" : "bg-muted-foreground justify-start"
                        } p-1 transition-all duration-200`}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div 
                          className="w-4 h-4 rounded-full bg-white"
                          layout
                        />
                      </motion.button>
                    </div>
                  ))}
                </div>
              )}
              
              {section.actions && (
                <div className="space-y-3 mt-4">
                  {section.actions.map((action, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{action.label}</h3>
                        {action.description && (
                          <p className="text-sm text-muted-foreground">{action.description}</p>
                        )}
                      </div>
                      <motion.button
                        className="px-3 py-1 bg-background border border-border rounded-md text-sm font-medium"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(234, 56, 76, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Configure
                      </motion.button>
                    </div>
                  ))}
                </div>
              )}
              
              {section.select && (
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">{section.select.label}</label>
                  {section.select.description && (
                    <p className="text-sm text-muted-foreground">{section.select.description}</p>
                  )}
                  <select className="w-full px-3 py-2 rounded-md border border-border bg-background focus:outline-none focus:ring-1 focus:ring-primary">
                    {section.select.options.map((option, idx) => (
                      <option key={idx} selected={option === section.select?.selected}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              {section.info && (
                <div className="space-y-3">
                  {section.info.map((info, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">{info.label}</p>
                  ))}
                  
                  <div className="flex gap-4 pt-3">
                    {section.links?.map((link, idx) => (
                      <motion.a
                        key={idx}
                        href="#"
                        className="text-sm text-primary hover:underline"
                        whileHover={{ scale: 1.05 }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex justify-end"
      >
        <motion.button
          className="bg-squidRed text-white px-6 py-2 rounded-md font-medium"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Save Settings
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Settings;
