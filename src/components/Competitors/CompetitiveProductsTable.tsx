"use client";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CompetitiveProductsTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-gray-800">
          <TableHead className="text-gray-400">Product Name</TableHead>
          <TableHead className="text-gray-400">Code</TableHead>
          <TableHead className="text-gray-400">Price</TableHead>
          <TableHead className="text-gray-400">Diff</TableHead>
          <TableHead className="text-gray-400">Status</TableHead>
          <TableHead className="text-gray-400">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Add table body content here */}
      </TableBody>
    </Table>
  );
}
