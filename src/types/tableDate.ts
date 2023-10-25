export interface TableData {
  id: number;
  name: string;
  email: string;
  birthday_date: string;
  phone_number: string;
  address?: string;
  [key: string]: string | number | undefined;
}
