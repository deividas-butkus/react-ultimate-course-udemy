import Friend from "../ui/Friend";

const FriendList = ({ friends }) => {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
