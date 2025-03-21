import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, Form, FormGroup, Label, Input, Textarea, Button } from "../Design/AddEvent";
import PasswordPrompt from "../Components/PasswordPrompt";

const AddEventPage = () => {
  const navigate = useNavigate();
  const [event, setEvent] = useState({
    image: null,
    date: "",
    description: ""
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = () => {
    setIsAuthenticated(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      image: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", event.image);
    formData.append("date", event.date);
    formData.append("description", event.description);

    try {
      const response = await fetch("https://vynceianoani.helioho.st/alampat/addevnts.php", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      console.log(data.message);

      // Reset form fields upon successful submission
      setEvent({
        image: null,
        date: "",
        description: ""
      });
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  if (!isAuthenticated) {
    return <PasswordPrompt onPasswordSubmit={handlePasswordSubmit} />;
  }

  return (
    <FormContainer>
      <h1>Add Event</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            Image:
            <Input
              type="file"
              name="image"
              onChange={handleFileChange}
              required
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Date:
            <Input
              type="date"
              name="date"
              value={event.date}
              onChange={handleChange}
              required
            />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Description:
            <Textarea
              name="description"
              value={event.description}
              onChange={handleChange}
              required
            />
          </Label>
        </FormGroup>
        <Button type="submit">Add Event</Button>
      </Form>
    </FormContainer>
  );
};

export default AddEventPage;