import DateSelector from "@/_components/DateSelector";
import ReservationForm from "@/_components/ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/_lib/data-service";

async function Reservation({ cabin }) {
  const [settings, bookedDays] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}

export default Reservation;
