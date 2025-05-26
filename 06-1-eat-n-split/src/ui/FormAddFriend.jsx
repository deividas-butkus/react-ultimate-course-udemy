import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewFriend((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const friend = {
      id: Date.now(),
      name: newFriend.name,
      image: newFriend.image,
      balance: 0,
    };

    console.log(friend);
    onAddFriend?.(friend);

    setNewFriend({ name: "", image: "https://i.pravatar.cc/48" });
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">🤝Name</label>
      <input
        name="name"
        id="name"
        type="text"
        value={newFriend.name}
        onChange={handleChange}
      />

      <label htmlFor="image">😁Image URL</label>
      <input
        name="image"
        id="image"
        type="text"
        value={newFriend.image}
        onChange={handleChange}
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default FormAddFriend;
