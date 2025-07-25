"use client";

function Filter() {
  return (
    <div className="border border-primary-800 flex">
      <button className="px-5 py-2">All cabins</button>
      <button className="px-5 py-2">1&mdash;3 guests</button>
      <button className="px-5 py-2">4&mdash;7 guests</button>
      <button className="px-5 py-2">8&mdash;12 guests</button>
    </div>
  );
}

export default Filter;
