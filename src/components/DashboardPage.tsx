"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";
import CompetitorsTable from "@/components/Competitors/CompetitorsTable";
import Top10CompetitorsTable from "@/components/Competitors/Top10CompetitorsTable";
import CompetitiveProductsTable from "@/components/Competitors/CompetitiveProductsTable";
import OverpricedProductsTable from "@/components/Competitors/OverpricedProductsTable";

// Types for our different views
export type ViewType = "dashboard" | "competitors" | "competitive" | "overpriced";
type TableType = "top10" | "competitive" | "overpriced";

export default function DashboardPage() {
  const [currentView, setCurrentView] = React.useState<ViewType>("dashboard");
  const [currentTable, setCurrentTable] = React.useState<TableType>("top10");
  const [sidebarOpen, setSidebarOpen] = React.useState(true);

  // Function to render the appropriate table based on current view
  const renderTable = () => {
    switch (currentView) {
      case "competitors":
        return <CompetitorsTable />;
      case "dashboard":
        switch (currentTable) {
          case "top10":
            return <Top10CompetitorsTable />;
          case "competitive":
            return <CompetitiveProductsTable />;
          case "overpriced":
            return <OverpricedProductsTable />;
          default:
            return null;
        }
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-[#1e252b]">
      <Sidebar
        currentView={currentView}
        setCurrentView={setCurrentView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className={cn("flex flex-1 flex-col", sidebarOpen && "ml-80")}>
        <Header currentView={currentView} setSidebarOpen={setSidebarOpen} />

        {/* Main Content Area */}
        <main className="flex-1 space-y-4 p-8">
          {currentView === "dashboard" ? (
            <Tabs defaultValue="overview" className="space-y-4">
              <TabsList className="bg-transparent">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="research"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-white"
                >
                  Research
                </TabsTrigger>
                <TabsTrigger
                  value="inventory"
                  className="data-[state=active]:bg-transparent data-[state=active]:text-white"
                >
                  Inventory Management
                </TabsTrigger>
              </TabsList>
              {renderTable()}
            </Tabs>
          ) : (
            <CompetitorsTable />
          )}
        </main>
      </div>
    </div>
  );
}
