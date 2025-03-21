import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PasswordPrompt = ({ onPasswordSubmit }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "admin123") { // Replace "admin123" with your desired password
      onPasswordSubmit();
    } else {
      alert("Incorrect password. Redirecting to home page.");
      navigate("/");
    }
  };

  return (
    <PromptContainer>
      <PromptForm onSubmit={handleSubmit}>
        <PromptLabel>
          Please enter the admin password:
          <PromptInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </PromptLabel>
        <PromptButton type="submit">Submit</PromptButton>
      </PromptForm>
    </PromptContainer>
  );
};

export default PasswordPrompt;

// Styled Components
const PromptContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PromptForm = styled.form`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const PromptLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const PromptInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const PromptButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;