export const calculateAge =(birthday_date: string): number | null => {
  const parts = birthday_date.split("-");

  if (parts.length === 3) {
    const year = parseInt(parts[2], 10) + 1900;
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[0], 10);

    const currentDate = new Date();

    const age = currentDate.getFullYear() - year;

    if (
      currentDate.getMonth() < month ||
      (currentDate.getMonth() === month && currentDate.getDate() < day)
    ) {
      return age - 1;
    }

    return age;
  }

  return null;
}
