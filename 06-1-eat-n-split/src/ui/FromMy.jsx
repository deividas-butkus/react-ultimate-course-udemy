import { useState } from "react";

import Button from "./Button";
const FormMy = () => {
  const [name, setName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  //     const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  //   const handleChange = (e) => {
  //     const { name, value } = e.target;

  //     setFormData((prev) => ({ ...prev, [name]: value }));
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        id="name"
        type="text"
        // value={formData.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        id="email"
        type="email"
        // value={formData.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">password</label>
      <input
        name="password"
        id="password"
        type="password"
        // value={formData.password}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit">Register</Button>
    </form>
  );
};

export default FormMy;
