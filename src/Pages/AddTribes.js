import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ModalOverlay,
  Modal,
  PasswordForm,
  PasswordInput,
  FormContainer,
  Form,
  Label,
  Input,
  Textarea,
  SubmitButton,
  TableContainer,
  StyledTable,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableData,
  TribeImage,
} from "../Design/AddTribesStyles";

const AddTribes = () => {
  const [formData, setFormData] = useState({
    name: "",
    featuredImage: null,
    description: "",
  });

  const [tribes, setTribes] = useState([]); // <-- ALWAYS start as an empty array
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "admin123";
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchTribes(); // fetch tribes once authenticated
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
      const response = await axios.post(
        "https://vynceianoani.helioho.st/alampat/addtribes.php",
        data,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      alert(response.data.message);

      setFormData({ name: "", featuredImage: null, description: "" });
      fetchTribes(); // Refresh the tribe list after adding
    } catch (error) {
      console.error("Error adding tribe:", error);
      alert("Failed to add tribe.");
    }
  };

  const fetchTribes = async () => {
    try {
      const response = await axios.get(
        "https://vynceianoani.helioho.st/alampat/gettribes.php",
      );
      const fetchedTribes = response.data?.tribes || [];
      setTribes(fetchedTribes);
    } catch (error) {
      console.error("Error fetching tribes:", error);
      setTribes([]); // set to empty array if fetching fails
    }
  };

  return (
    <>
      {!isAuthenticated ? (
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
      ) : (
        <>
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

          {/* --- TRIBES TABLE --- */}
          <TableContainer>
            <h2>Existing Tribes</h2>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableHeader>Image</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Description</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {tribes.map((tribe, index) => (
                  <TableRow key={index}>
                    <TableData>
                      <TribeImage
                        src={`data:image/jpeg;base64,${tribe.featured_image}`}
                        alt={tribe.name}
                      />
                    </TableData>
                    <TableData>{tribe.name}</TableData>
                    <TableData>{tribe.description}</TableData>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
          </TableContainer>
        </>
      )}
    </>
  );
};

export default AddTribes;
