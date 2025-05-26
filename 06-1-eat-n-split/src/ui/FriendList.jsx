import { useState } from "react";
import initialFriends from "../data/data.json";
import Friend from "../ui/Friend";

const FriendList = () => {
  const [friends, setFriends] = useState(initialFriends);

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
