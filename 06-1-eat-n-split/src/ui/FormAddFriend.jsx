import Button from "./Button";

const FormAddFriend = () => {
  return (
    <form className="form-add-friend">
      <label htmlFor="name">🤝Name</label>
      <input type="text" />

      <label htmlFor="imageUrl">😁Image URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
