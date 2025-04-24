import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const AddTribes = () => {
  const [formData, setFormData] = useState({
    name: "",
    featuredImage: null,
    description: "",
  });

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "admin123"; // Replace with your desired password
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Incorrect password. Access denied.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, featuredImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("featuredImage", formData.featuredImage);
    data.append("description", formData.description);

    try {
      const response = await axios.post("https://vynceianoani.helioho.st/alampat/addtribes.php", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message);

      // Clear the form inputs after successful addition
      setFormData({
        name: "",
        featuredImage: null,
        description: "",
      });
    } catch (error) {
      console.error("Error adding tribe:", error);
      alert("Failed to add tribe.");
    }
  };

  return (
    <>
      {!isAuthenticated && (
        <ModalOverlay>
          <Modal>
            <h1>Enter Password</h1>
            <PasswordForm onSubmit={handlePasswordSubmit}>
              <PasswordInput
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <SubmitButton type="submit">Submit</SubmitButton>
            </PasswordForm>
          </Modal>
        </ModalOverlay>
      )}

      {isAuthenticated && (
        <FormContainer>
          <h1>Add Tribe</h1>
          <Form onSubmit={handleSubmit}>
            <Label>
              Tribe Name:
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Featured Image:
              <Input
                type="file"
                name="featuredImage"
                accept="image/*"
                onChange={handleFileChange}
                required
              />
            </Label>
            <Label>
              Short Description:
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Label>
            <SubmitButton type="submit">Add Tribe</SubmitButton>
          </Form>
        </FormContainer>
      )}
    </>
  );
};

export default AddTribes;

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 400px;
`;

const PasswordForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const PasswordInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const FormContainer = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  text-align: left;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;