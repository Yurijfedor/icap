import { useState } from "react";
import { NewRowFormContainer } from "./AddRowForm.styled";

interface AddRowFormProps {
  editingData: {
    name: string;
    email: string;
    birthday_date: string;
    phone_number: string;
    address?: string;
  };
  onCancel: () => void;
  onSave: () => void;
  onRowTableChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AddRowForm: React.FC<AddRowFormProps> = ({
  editingData,
  onCancel,
  onSave,
  onRowTableChange,
}) => {
  const [isValidDate, setIsValidDate] = useState(true);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])-(0[1-9]|1[0-2])-\d{2}$/;
    const { value } = e.target;
    if (datePattern.test(value)) {
      setIsValidDate(true);
    } else {
      setIsValidDate(false);
    }
    onRowTableChange(e);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (/^[0-9+]*$/.test(inputValue)) {
      onRowTableChange(e);
    }
  };

  return (
    <NewRowFormContainer>
      <h3>Додати новий рядок</h3>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={editingData.name}
          onChange={onRowTableChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={editingData.email}
          onChange={onRowTableChange}
        />
      </div>
      <div>
        <label>Birthday Date:</label>
        <input
          type="text"
          name="birthday_date"
          value={editingData.birthday_date}
          onChange={handleDateChange}
          style={{ borderColor: isValidDate ? "" : "red" }}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phone_number"
          value={editingData.phone_number}
          onChange={handlePhoneNumberChange}
          style={{ borderColor: isValidDate ? "" : "red" }}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={editingData.address || ""}
          onChange={onRowTableChange}
        />
      </div>
      <button onClick={onCancel}>Скасувати</button>
      <button onClick={onSave}>Зберегти</button>
    </NewRowFormContainer>
  );
};
