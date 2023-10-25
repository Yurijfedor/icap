import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store";
import { RootState } from "../../redux/store";
import { setCurrentPage, setItemsPerPage } from "../../redux/table/tableSlice";
import { TableData } from "../../types/tableDate";
import { Row } from "../../types/row";
import {
  fetchTableData,
  updateTableData,
  createTableData,
  deleteTableData,
} from "../../redux/table/operation";
import { logOut } from "../../redux/auth/authSlice";
import { TableRow } from "../../components/tableRow/TableRow";
import { AddRowForm } from "../../components/rowForm/AddRowForm";
import { TableComments } from "../../components/TableComments";
import { formatDate } from "../../helpers/formatDate";
import {
  TablePageContainer,
  TableHeader,
  LogoutButton,
  ItemsPerPageContainer,
  SmallTitle,
  Wrapper,
  FilterInput,
  AddRowButton,
  Table,
  TableHead,
  TableRow as StyledTableRow,
  TableHeaderCell,
  PaginationContainer,
  PaginationWrapper,
  PaginationButton,
  PageNumber,
  CommentsContainer,
  ErrorMessage,
  EditButton,
} from "./TablePage.styled";

const TablePage: React.FC = () => {
  const [editingRow, setEditingRow] = useState<number | null>(null);
  const [isNewRowFormVisible, setNewRowFormVisible] = useState(false);
  const [editingData, setEditingData] = useState<Row>({
    id: 0,
    name: "",
    email: "",
    birthday_date: "",
    phone_number: "",
    address: "",
  });
  const [sortColumn, setSortColumn] = useState<string>("id");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [filterText, setFilterText] = useState<string>("");
  const navigate = useNavigate();
  const currentPage: number = useSelector(
    (state: RootState) => state.table.currentPage
  );
  const perPage: number = useSelector(
    (state: RootState) => state.table.perPage
  );
  const tableData: TableData[] = useSelector(
    (state: RootState) => state.table.data
  );
  const totalPages: number = useSelector(
    (state: RootState) => state.table.totalPages
  );
  const isAuthenticated: boolean = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const isLoggingIn: boolean = useSelector(
    (state: RootState) => state.auth.isLoggingIn
  );

  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    isAuthenticated ? (
      dispatch(fetchTableData({ page: currentPage, perPage }))
    ) : (
      <>
        <ErrorMessage>Incorrect email address or password</ErrorMessage>
        <button onClick={() => navigate("/login")}>try again</button>
      </>
    );
  }, [currentPage, dispatch, perPage, isAuthenticated, navigate]);

  const handleAddRow = () => {
    const newRow: Row = {
      id: new Date().getTime(),
      name: "",
      email: "",
      birthday_date: "",
      phone_number: "",
      address: "",
    };
    setEditingRow(newRow.id);
    setEditingData(newRow);
    setNewRowFormVisible(true);
  };

  const handleSaveNewRow = async () => {
    if (editingData) {
      const updatedRowWithNewDate = {
        ...editingData,
        birthday_date: formatDate(editingData.birthday_date),
      };
      console.log(updatedRowWithNewDate.birthday_date);

      try {
        await dispatch(createTableData(updatedRowWithNewDate));

        setEditingRow(null);
        setEditingData({
          id: 0,
          name: "",
          email: "",
          birthday_date: "",
          phone_number: "",
          address: "",
        });
        setNewRowFormVisible(false);
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleEdit = (id: number, row: TableData) => {
    setEditingRow(id);
    setEditingData(row);
  };

  const handleSave = (id: number) => {
    if (editingData) {
      const updatedRowWithNewDate = {
        ...editingData,
        birthday_date: formatDate(editingData.birthday_date),
      };
      if (
        /^\S+@\S+\.\S+$/i.test(editingData.email) &&
        /^[0-9+]*$/.test(editingData.phone_number)
      ) {
        dispatch(updateTableData(updatedRowWithNewDate));
        setEditingRow(null);
      } else {
        alert("wrong format phone or email");
      }
    }
  };

  const handleRowTableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleItemsPerPageChange = (newPerPage: number) => {
    dispatch(setItemsPerPage(newPerPage));
    dispatch(setCurrentPage(1));
  };

  const sortedData = [...tableData].sort((a, b) => {
    const aValue = String(a[sortColumn] || "");
    const bValue = String(b[sortColumn] || "");
    return sortDirection === "asc"
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue);
  });

  const filteredData = sortedData.filter((row) =>
    row.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const handleSort = (column: string) => {
    setSortColumn(column);
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const handleFilter = (text: string) => {
    setFilterText(text);
  };

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;

  const handleDelete = async (id: number) => {
    try {
      await dispatch(deleteTableData(id));
    } catch (error) {
      console.error(error);
    }
  };

  return !isLoggingIn ? (
    !isAuthenticated ? (
      <>
        <ErrorMessage>Incorrect email address or password</ErrorMessage>
        <button onClick={() => navigate("/login")}>try again</button>
      </>
    ) : (
      <TablePageContainer>
        <TableHeader>Table Page</TableHeader>
        <Wrapper>
          <ItemsPerPageContainer>
            <SmallTitle>results per page:</SmallTitle>
            <EditButton onClick={() => handleItemsPerPageChange(10)}>
              10
            </EditButton>
            <EditButton onClick={() => handleItemsPerPageChange(20)}>
              20
            </EditButton>
          </ItemsPerPageContainer>
          <LogoutButton
            onClick={() => {
              dispatch(logOut());
              navigate("/");
              console.log(isAuthenticated);
            }}
          >
            Log out
          </LogoutButton>
        </Wrapper>

        <FilterInput
          type="text"
          placeholder="Filter by Name"
          value={filterText}
          onChange={(e) => handleFilter(e.target.value)}
        />
        <AddRowButton onClick={handleAddRow}>Додати рядок</AddRowButton>
        <Table>
          <TableHead>
            <StyledTableRow>
              <TableHeaderCell onClick={() => handleSort("id")}>
                ID
              </TableHeaderCell>
              <TableHeaderCell onClick={() => handleSort("name")}>
                Name
              </TableHeaderCell>
              <TableHeaderCell onClick={() => handleSort("email")}>
                E-mail
              </TableHeaderCell>
              <TableHeaderCell onClick={() => handleSort("birthday_date")}>
                Age
              </TableHeaderCell>
              <TableHeaderCell onClick={() => handleSort("phone_number")}>
                Phone
              </TableHeaderCell>
              <TableHeaderCell onClick={() => handleSort("address")}>
                Address
              </TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </StyledTableRow>
          </TableHead>
          <tbody>
            {filteredData.map((row) => (
              <TableRow
                key={row.id}
                row={row}
                editingRow={editingRow}
                editingData={editingData}
                onEdit={() => handleEdit(row.id, row)}
                onSave={() => handleSave(row.id)}
                onDelete={() => handleDelete(row.id)}
                onRowTableChange={handleRowTableChange}
              />
            ))}
          </tbody>
        </Table>

        {isNewRowFormVisible && (
          <AddRowForm
            editingData={editingData}
            onCancel={() => setNewRowFormVisible(false)}
            onSave={handleSaveNewRow}
            onRowTableChange={handleRowTableChange}
          />
        )}

        <PaginationContainer>
          <PaginationButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Попередня сторінка
          </PaginationButton>
          <PageNumber>Сторінка {currentPage}</PageNumber>
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= totalPages * perPage}
          >
            Наступна сторінка
          </PaginationButton>
        </PaginationContainer>
        <PaginationWrapper>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationButton
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PaginationButton>
          ))}
        </PaginationWrapper>
        <CommentsContainer>
          <TableComments />
        </CommentsContainer>
      </TablePageContainer>
    )
  ) : (
    <h2>Login process...</h2>
  );
};

export default TablePage;
