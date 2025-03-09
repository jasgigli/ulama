// app/lib/utils.ts
// Example: Date formatting utility (you can add more)
import { format } from "date-fns";
import ur from "date-fns/locale/ur";

export const formatDate = (dateString: string) => {
  return format(new Date(dateString), "PPP", { locale: ur });
};
