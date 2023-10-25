import { format, parse } from "date-fns";

export const formatDate = (dateString: string) => {
  if (dateString !== "") {
    const parsedDate = parse(dateString, "dd-MM-yy", new Date());
    return format(parsedDate, "yyyy-MM-dd");
  } else {
    alert("enter your birthday in dd-mm-yy format");
    return ""; // Повертаємо пустий рядок, оскільки функція має повертати значення типу string.
  }
};
