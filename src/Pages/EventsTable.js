import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  EventImage
} from "../Design/EventsTableStyles";
import PasswordPrompt from "../Components/PasswordPrompt";

const EventsTable = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      const fetchEvents = async () => {
        try {
          const response = await fetch("https://vynceianoani.helioho.st/alampat/getevents.php");
          const data = await response.json();
          setEvents(data);
        } catch (error) {
          console.error("Error fetching events:", error);
        }
      };

      fetchEvents();
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordPrompt onPasswordSubmit={handlePasswordSubmit} />;
  }

  return (
    <TableContainer>
      <h1>Events</h1>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Image</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Description</TableHeader>
          </TableRow>
        </TableHead>
        <tbody>
          {events.map((event) => (
            <TableRow key={event.id}>
              <TableCell>{event.id}</TableCell>
              <TableCell>
                <EventImage src={`data:image/jpeg;base64,${event.image}`} alt="Event" />
              </TableCell>
              <TableCell>{event.date}</TableCell>
              <TableCell>{event.description}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default EventsTable;