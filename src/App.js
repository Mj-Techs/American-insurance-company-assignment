import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetails from "./UserDetails";
const Departments = ["HR", "ENGINEERING"];
const empId1 = [1, 2, 3, 4, 5];
const empId2 = [6, 7, 8, 9, 10];
const App = (props) => {
  const [department, setDepartment] = useState("");
  const [employeeId, setEmployeeId] = useState([]);
  const [id, setId] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const handleDepartment = (e) => {
    const result = e.target.value;
    setShowDetails(false);
    if (result === "HR") {
      setEmployeeId(empId1);
    } else {
      setEmployeeId(empId2);
    }
    setDepartment(result);
  };
  const HandleIdChange = (e) => {
    setShowDetails(false);
    setId(e.target.value);
  };
  const handleClick = () => {
    if (department && employeeId) {
      setShowDetails(true);
    }
  };
  const ToggleDetails = () => {
    setShowDetails(false);
    setDepartment("");
    setEmployeeId([]);
  };
  return (
    <Container>
      <Row>
        <Col>
          <label>Departments:</label>
          <br />
          <select
            value={department}
            onChange={handleDepartment}
            style={{ width: "150px", backgroundColor: "lightgrey" }}
          >
            <option value=""></option>
            {Departments.map((dept, i) => {
              return (
                <option key={i} value={dept}>
                  {dept}
                </option>
              );
            })}
          </select>
        </Col>
        <Col>
          <label>Employee id:</label>
          <br />
          <select
            onChange={HandleIdChange}
            style={{ width: "150px", backgroundColor: "lightgrey" }}
          >
            <option></option>
            {employeeId.map((id) => {
              return (
                <option key={id} value={id}>
                  {id}
                </option>
              );
            })}
          </select>
        </Col>
        <Col>
          <br />
          <button onClick={handleClick}>GetDetails</button>
        </Col>
        <Col>
          <br />
          <button onClick={ToggleDetails}>Clear</button>
        </Col>
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3rem",
        }}
      >
        {showDetails && <UserDetails id={id} />}
      </div>
    </Container>
  );
};
export default App;
