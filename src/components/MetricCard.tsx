import { ChevronDown, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MetricCard() {
  return (
    <Card className="bg-[#2d363d]">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div className="h-12 w-12 rounded-full bg-pink-500 p-3">
          <Package className="h-full w-full text-white" />
        </div>
        <CardTitle className="ml-4 text-base font-normal text-gray-400">
          Competitive Products
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline space-x-3">
          <div className="text-3xl font-bold text-white">10/10</div>
          <div className="flex items-center text-sm text-green-500">
            +11.01%
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
        </div>
        <Button variant="link" className="mt-4 p-0 text-transparent bg-clip-text bg-gradient-to-b from-red-500 via-orange-500 to-green-400">
          View all
        </Button>
      </CardContent>
    </Card>
  );
}
