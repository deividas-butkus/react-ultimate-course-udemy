import CabinList from "@/_components/CabinList";
import Filter from "@/_components/Filter";
import ReservationReminder from "@/_components/ReservationReminder";
import Spinner from "@/_components/Spinner";
import { Suspense } from "react";

//Commented out after searchParams implementation as become redundant.
// If in the future PPR would be implemented, revalidate ight be considered with the static part.
// export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

const buildTime = new Date().toLocaleTimeString();

export default function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  console.log(filter);

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      {/* <p className="text-accent-300 text-sm mb-5">
        Static content built at: {buildTime}
      </p> */}

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
