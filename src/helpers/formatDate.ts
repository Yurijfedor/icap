import { format, parse } from "date-fns";

export const formatDate = (dateString: string) => {
  const parsedDate = parse(dateString, "dd-MM-yy", new Date());
  return format(parsedDate, "yyyy-MM-dd");
};
