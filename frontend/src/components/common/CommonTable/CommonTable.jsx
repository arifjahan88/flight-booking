import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { DEFAULT_HIDDEN_KEYS } from "./constants";

export default function CommonTable({ data, hiddenKeys = [], onDelete, onEdit }) {
  if (!data || data.length === 0) {
    return (
      <Typography variant="body1" align="center" sx={{ mt: 4 }}>
        No data available
      </Typography>
    );
  }

  // Get keys, excluding hidden keys
  const AllHiddenKeys = [...hiddenKeys, ...DEFAULT_HIDDEN_KEYS];
  const visibleKeys = Object.keys(data[0]).filter((key) => !AllHiddenKeys.includes(key));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {visibleKeys.map((key) => (
              <TableCell key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
            ))}
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              {visibleKeys.map((key) => (
                <TableCell key={key}>{row[key]}</TableCell>
              ))}
              <TableCell align="right">
                {onEdit && (
                  <IconButton aria-label="edit" color="primary" onClick={() => onEdit(row)}>
                    <EditIcon />
                  </IconButton>
                )}
                {onDelete && (
                  <IconButton aria-label="delete" color="error" onClick={() => onDelete(row?._id)}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
