import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { getBookings } from "../../services/apiBookings";

export function useBookings() {
  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: getBookings,

    onError: (err) => toast.error(err.message),
  });

  return { isLoading, bookings, error };
}
