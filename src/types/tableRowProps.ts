import { TableData } from "./tableDate";
import { Row } from "./row";

export interface TableRowProps {
  row: TableData;
  editingRow: number | null;
  editingData: Row;
  onEdit: () => void;
  onSave: () => void;
  onDelete: () => void;
  onRowTableChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
