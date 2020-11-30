import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
const UserDetails = (props) => {
  const { id } = props;
  const [userData, setUserData] = useState({});
  useEffect(() => {
    if (id) {
      axios.get(` https://reqres.in/api/users/ ${id}`).then((response) => {
        const result = response.data;
        setUserData(result);
      });
    }
  }, [id]);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
export default UserDetails;
