import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";
const UserDetails = (props) => {
  const { id } = props;
  const [userData, setUserData] = useState({});
  useEffect(() => {
    if (id) {
      axios
        .get(` https://reqres.in/api/users/ ${id}`)
        .then((response) => {
          const result = response.data;
          setUserData(result);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  }, [id]);
  return (
    <div>
      {Object.keys(userData).length > 0 && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={userData.data.avatar} />
          <Card.Body>
            <Card.Text>ID: {userData.data.id}</Card.Text>
            <Card.Text>
              Name: {userData.data.first_name} {userData.data.last_name}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
export default UserDetails;
