import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { reverseString } from "../../../utils"

const columns = [
  { id: 'tournament', label: 'Tournament', minWidth: 170 },
  { id: 'country', label: 'Country', minWidth: 100 },
];

export default function ListTable({ tournaments, page, setPage }) {
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} className="tournament-list-table">
      <TableContainer sx={{ maxHeight: 640 }} >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id} style={{ minWidth: column.minWidth, fontWeight: "bold" }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tournaments.length > 0 ? tournaments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(tournament => {
                const cellKey = `${tournament.id} + ${tournament.country.id}`;
                const cellKeyReversed = reverseString(cellKey);
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={tournament.id}>
                      <TableCell key={cellKey}> {tournament.name} </TableCell>
                      <TableCell key={cellKeyReversed}> {tournament.country.name} </TableCell>  
                  </TableRow>
                );
              }) : <TableRow><TableCell colSpan={2}> No results </TableCell></TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={tournaments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

