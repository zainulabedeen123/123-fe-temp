import React, { Dispatch, SetStateAction } from "react";
import { LayoutDashboard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ViewType } from "@/components/DashboardPage";

interface SidebarProps {
  currentView: ViewType;
  setCurrentView: Dispatch<SetStateAction<ViewType>>;
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({
  currentView,
  setCurrentView,
  sidebarOpen,
}) => {
  return (
    <div
      className={`fixed inset-y-0 z-50 flex w-80 flex-col bg-[#2d363d] ${
        sidebarOpen ? "" : "hidden"
      }`}
    >
      <div className="flex h-16 items-center gap-2 border-b border-gray-800 px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">123</span>
          <span className="text-2xl font-bold text-white">Scraper</span>
        </div>
      </div>

      <div className="flex-1 overflow-auto px-6 py-4">
        {/* Account Section */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-400">Account</h2>
          <nav className="space-y-1">
            <Button
              variant="ghost"
              className={`w-full justify-start text-gray-400 hover:bg-gray-700/50 hover:text-white ${
                currentView === "dashboard" ? "bg-gray-700/50 text-white" : ""
              }`}
              onClick={() => setCurrentView("dashboard")}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start text-gray-400 hover:bg-gray-700/50 hover:text-white ${
                currentView === "competitors" ? "bg-gray-700/50 text-white" : ""
              }`}
              onClick={() => setCurrentView("competitors")}
            >
              <Users className="mr-2 h-4 w-4" />
              Competitors
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
