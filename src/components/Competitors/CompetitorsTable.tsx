"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CompetitorsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-gray-800">
          <TableHead className="text-gray-400">Competitor domain</TableHead>
          <TableHead className="text-gray-400">Monitored URLs</TableHead>
          <TableHead className="text-gray-400">Prod.Matched</TableHead>
          <TableHead className="text-gray-400">Your Position</TableHead>
          <TableHead className="text-gray-400">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Add table body content here */}
      </TableBody>
    </Table>
  );
}
