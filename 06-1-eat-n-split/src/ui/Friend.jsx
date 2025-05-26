import Button from "./Button";

const Friend = ({ friend }) => {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          I owe ${Math.abs(friend.balance)} EUR to {friend.name}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes me {friend.balance} EUR
        </p>
      )}
      {friend.balance === 0 && <p>We are even with {friend.name}</p>}

      <Button>Select</Button>
    </li>
  );
};

export default Friend;
