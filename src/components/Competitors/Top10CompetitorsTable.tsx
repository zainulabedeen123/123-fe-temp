import * as React from "react";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Top10CompetitorsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Competitor</TableHead>
          <TableHead>Market Share</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* Add your table rows here */}
      </TableBody>
    </Table>
  );
};

export default Top10CompetitorsTable;
