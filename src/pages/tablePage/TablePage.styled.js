import styled from "styled-components";

export const TablePageContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
`;

export const TableHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const LogoutButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ItemsPerPageContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const SmallTitle = styled.h3`
  margin: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FilterInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const AddRowButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #45a049;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const TableHead = styled.thead`
  background-color: #f2f2f2;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableHeaderCell = styled.th`
  cursor: pointer;
  padding: 12px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 12px;
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const SaveButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export const DeleteButton = styled.button`
  background-color: #d9534f;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #c9302c;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
  align-items: center;
  margin: 20px 0 10px 0;
`;

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const PaginationButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const PageNumber = styled.span`
  font-weight: bold;
`;

export const CommentsContainer = styled.div`
  margin-top: 20px;
`;

export const ErrorMessage = styled.h2`
  color: red;
`;
