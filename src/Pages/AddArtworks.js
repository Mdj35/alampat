import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const AddArtworks = () => {
  const [tribes, setTribes] = useState([]);
  const [formData, setFormData] = useState({
    artworkTitle: "",
    artworkPicture: null,
    artworkDescription: "",
    tribeId: "",
  });

  useEffect(() => {
    // Fetch tribes to populate the dropdown
    axios
      .get("https://vynceianoani.helioho.st/alampat/gettribes.php")
      .then((response) => {
        setTribes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching tribes:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("artworkTitle", formData.artworkTitle);
    data.append("artworkPicture", formData.artworkPicture);
    data.append("artworkDescription", formData.artworkDescription);
    data.append("tribeId", formData.tribeId);

    try {
      const response = await axios.post(
        "https://vynceianoani.helioho.st/alampat/addArtworks.php",
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      alert(response.data.message);
      setFormData({
        artworkTitle: "",
        artworkPicture: null,
        artworkDescription: "",
        tribeId: "",
      });
    } catch (error) {
      console.error("Error adding artwork:", error);
      alert("Failed to add artwork.");
    }
  };

  return (
    <FormContainer>
      <h1>Add Artwork</h1>
      <Form onSubmit={handleSubmit}>
        <Label>
          Artwork Title:
          <Input
            type="text"
            name="artworkTitle"
            value={formData.artworkTitle}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Artwork Picture:
          <Input
            type="file"
            name="artworkPicture"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </Label>
        <Label>
          Artwork Description:
          <Textarea
            name="artworkDescription"
            value={formData.artworkDescription}
            onChange={handleChange}
            required
          />
        </Label>
        <Label>
          Tribe:
          <Select
            name="tribeId"
            value={formData.tribeId}
            onChange={handleChange}
            required
          >
            <option value="">Select a Tribe</option>
            {tribes.map((tribe) => (
              <option key={tribe.id} value={tribe.id}>
                {tribe.name}
              </option>
            ))}
          </Select>
        </Label>
        <SubmitButton type="submit">Add Artwork</SubmitButton>
      </Form>
    </FormContainer>
  );
};

export default AddArtworks;

// Styled Components
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

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
