import { useState } from "react";

import initialFriends from "./data/data.json";
import Button from "./ui/Button";
import FormAddFriend from "./ui/FormAddFriend";
import FriendList from "./ui/FriendList";
import FormSplitBill from "./ui/FormSplitBill";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [formAddFriendVisible, setFormAddFriendVisible] = useState(false);

  const handleAddFriendClick = () => {
    setFormAddFriendVisible((visibility) => !visibility);
  };

  const handleAddFriend = (newFriend) => {
    setFriends((prev) => [...prev, newFriend]);
    setFormAddFriendVisible(false);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {formAddFriendVisible && (
          <FormAddFriend onAddFriend={handleAddFriend} />
        )}
        <Button onClick={handleAddFriendClick}>
          {formAddFriendVisible ? "Close" : "Add new friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
};

export default App;
