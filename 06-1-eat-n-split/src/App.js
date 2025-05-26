import { useState } from "react";

import Button from "./ui/Button";
import FormAddFriend from "./ui/FormAddFriend";
import FriendList from "./ui/FriendList";

const App = () => {
  const [formAddFriendVisible, setFormAddFriendVisible] = useState(false);

  const handleAddFriendClick = () => {
    setFormAddFriendVisible(!formAddFriendVisible);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {formAddFriendVisible && <FormAddFriend />}
        <Button onClick={handleAddFriendClick}>
          {formAddFriendVisible ? "Close" : "Add new friend"}
        </Button>
      </div>
    </div>
  );
};

export default App;
