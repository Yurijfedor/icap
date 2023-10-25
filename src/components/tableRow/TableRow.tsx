import { TableRowProps } from "../../types/tableRowProps";
import { calculateAge } from "../../helpers/calculateAge";

import {
  TableCell,
  EditButton,
  SaveButton,
  DeleteButton,
} from "./TableRow.styled";

export const TableRow: React.FC<TableRowProps> = ({
  row,
  editingRow,
  editingData,
  onEdit,
  onSave,
  onDelete,
  onRowTableChange,
}) => {
  const isEditing = editingRow === row.id;

  return (
    <tr key={row.id}>
      <TableCell>{row.id}</TableCell>
      <TableCell>
        {isEditing ? (
          <input
            name="name"
            value={editingData.name}
            onChange={onRowTableChange}
          />
        ) : (
          row.name
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <input
            name="email"
            value={editingData.email}
            onChange={onRowTableChange}
          />
        ) : (
          row.email
        )}
      </TableCell>
      <TableCell>{calculateAge(row.birthday_date)}</TableCell>
      <TableCell>
        {isEditing ? (
          <input
            name="phone_number"
            value={editingData.phone_number}
            onChange={onRowTableChange}
          />
        ) : (
          row.phone_number
        )}
      </TableCell>
      <TableCell>
        {isEditing ? (
          <input
            name="address"
            value={editingData.address}
            onChange={onRowTableChange}
          />
        ) : (
          row.address
        )}
      </TableCell>
      <TableCell style={{ display: "flex", gap: "5px" }}>
        {isEditing ? (
          <SaveButton onClick={onSave}>Save</SaveButton>
        ) : (
          <EditButton onClick={onEdit}>Edit</EditButton>
        )}
        <DeleteButton onClick={onDelete}>Delete</DeleteButton>
      </TableCell>
    </tr>
  );
};
