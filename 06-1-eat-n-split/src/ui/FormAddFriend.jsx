import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [formData, setFormData] = useState({
    name: "",
    image: "https://i.pravatar.cc/48",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.image.trim()) return;

    const id = crypto.randomUUID();

    const newFriend = {
      id,
      name: formData.name,
      image: `${formData.image}?=${id}`,
      balance: 0,
    };

    onAddFriend?.(newFriend);

    setFormData({ name: "", image: "https://i.pravatar.cc/48" });
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">🤝Name</label>
      <input
        name="name"
        id="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="image">😁Image URL</label>
      <input
        name="image"
        id="image"
        type="text"
        value={formData.image}
        onChange={handleChange}
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default FormAddFriend;
