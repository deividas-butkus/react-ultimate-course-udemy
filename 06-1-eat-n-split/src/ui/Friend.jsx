import Button from "./Button";

const Friend = ({ friend, selectedFriend, onSelect }) => {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
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

      <Button onClick={() => onSelect(friend.id)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
