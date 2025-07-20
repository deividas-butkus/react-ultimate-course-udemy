import Counter from "@/app/_components/Counter";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export default async function Page() {
  let data = [];

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) {
      throw new Error(`Fetch failed with status ${res.status}`);
    }

    data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }

  return (
    <div>
      <h1>Cabins page</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <Counter users={data} />
    </div>
  );
}
