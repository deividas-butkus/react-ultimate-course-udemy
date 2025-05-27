import Friend from "../ui/Friend";

const FriendList = ({ friends, onSelectFriend, selectedFriend }) => {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            onSelect={onSelectFriend}
          />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
