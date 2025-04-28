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
  EditButton, // Make sure you create a styled EditButton if you want
} from "../Design/AddTribesStyles";

const AddTribes = () => {
  const [formData, setFormData] = useState({
    name: "",
    featuredImage: null,
    description: "",
  });

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tribes, setTribes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTribeId, setEditTribeId] = useState(null);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "admin123";
    if (password === correctPassword) {
      setIsAuthenticated(true);
      fetchTribes();
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
    data.append("description", formData.description);

    if (formData.featuredImage) {
      data.append("featuredImage", formData.featuredImage);
    }

    try {
      if (isEditing) {
        // Editing existing tribe
        data.append("id", editTribeId);
        const response = await axios.post(
          "https://vynceianoani.helioho.st/alampat/editTribe.php",
          data,
          { headers: { "Content-Type": "multipart/form-data" } },
        );
        alert(response.data.message);
      } else {
        // Adding new tribe
        const response = await axios.post(
          "https://vynceianoani.helioho.st/alampat/addtribes.php",
          data,
          { headers: { "Content-Type": "multipart/form-data" } },
        );
        alert(response.data.message);
      }

      setFormData({ name: "", featuredImage: null, description: "" });
      setIsEditing(false);
      setEditTribeId(null);
      fetchTribes();
    } catch (error) {
      console.error("Error saving tribe:", error);
      alert("Failed to save tribe.");
    }
  };

  const fetchTribes = async () => {
    try {
      const response = await axios.get(
        "https://vynceianoani.helioho.st/alampat/gettribes.php",
      );
      setTribes(response.data);
    } catch (error) {
      console.error("Error fetching tribes:", error);
      alert("Failed to fetch tribes.");
    }
  };

  const handleEdit = (tribe) => {
    setFormData({
      name: tribe.name,
      featuredImage: null, // still empty
      description: tribe.description,
      existingImage: tribe.featured_image, // <-- this!
    });
    setIsEditing(true);
    setEditTribeId(tribe.id);
    window.scrollTo(0, 0); // Scroll to top
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
            <h1>{isEditing ? "Edit Tribe" : "Add Tribe"}</h1>
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
                Featured Image: {isEditing && <span>(Optional)</span>}
                <Input
                  type="file"
                  name="featuredImage"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {isEditing && formData.existingImage && (
                  <div style={{ marginTop: "10px" }}>
                    <p>Current Image:</p>
                    <img
                      src={`data:image/jpeg;base64,${formData.existingImage}`}
                      alt="Current"
                      style={{ width: "150px", borderRadius: "8px" }}
                    />
                  </div>
                )}
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
              <SubmitButton type="submit">
                {isEditing ? "Update Tribe" : "Add Tribe"}
              </SubmitButton>
            </Form>
          </FormContainer>

          <TableContainer>
            <h2>Tribes List</h2>
            <StyledTable>
              <TableHead>
                <TableRow>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Featured Image</TableHeader>
                  <TableHeader>Description</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                {tribes.map((tribe) => (
                  <TableRow key={tribe.id}>
                    <TableData>{tribe.id}</TableData>
                    <TableData>{tribe.name}</TableData>
                    <TableData>
                      <TribeImage
                        src={`data:image/jpeg;base64,${tribe.featured_image}`}
                        alt={tribe.name}
                      />
                    </TableData>
                    <TableData>{tribe.description}</TableData>
                    <TableData>
                      <EditButton onClick={() => handleEdit(tribe)}>
                        Edit
                      </EditButton>
                    </TableData>
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
