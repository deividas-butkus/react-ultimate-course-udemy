import { useState } from "react";

import initialFriends from "./data/data.json";
import Button from "./ui/Button";
import FormAddFriend from "./ui/FormAddFriend";
import FriendList from "./ui/FriendList";
import FormSplitBill from "./ui/FormSplitBill";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [formAddFriendVisible, setFormAddFriendVisible] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriendClick = () => {
    setFormAddFriendVisible((visibility) => !visibility);
    setSelectedFriend(null);
  };

  const handleAddFriend = (newFriend) => {
    setFriends((prev) => [...prev, newFriend]);
    setFormAddFriendVisible(false);
  };

  const handleSelectFriend = (id) => {
    setSelectedFriend((cur) =>
      cur?.id === id ? null : friends.find((f) => f.id === id),
    );
    setFormAddFriendVisible(false);
  };

  const handleSplitBill = (value, id) => {
    setFriends((friends) => {
      const updated = friends.map((friend) =>
        friend.id === id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      );
      console.log(updated); // 🧪 see updated balances
      return updated;
    });
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {formAddFriendVisible && (
          <FormAddFriend onAddFriend={handleAddFriend} />
        )}
        <Button onClick={handleAddFriendClick}>
          {formAddFriendVisible ? "Close" : "Add new friend"}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
