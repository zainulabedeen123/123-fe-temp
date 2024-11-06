import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Tag, Eye } from "lucide-react";

export default function CompetitorsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-gray-800 hover:bg-transparent">
          <TableHead className="w-12"><Checkbox /></TableHead>
          {/* Table Headers */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Table Body */}
      </TableBody>
    </Table>
  );
}
