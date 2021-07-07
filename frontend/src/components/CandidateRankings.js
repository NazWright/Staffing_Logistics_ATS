import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  ProgressBar,
  Modal,
  Form,
} from "react-bootstrap";
import Image1 from "../assets/img1.png";
import Image2 from "../assets/img2.png";
import Image3 from "../assets/profilepic3.jpeg";

const CandidateModal = ({ show, onHide, application }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ width: "100%" }}>
          <Row>
            <span>
              <img src={application.image} />
            </span>
            <span>{`${application.name} - Application`}</span>
          </Row>
          <Row>
            <Col md={4}>
              <Form.Text style={{ fontSize: "12px" }}>Overall Match</Form.Text>
              <ProgressBar
                now={application.skillMatch + application.locationMatch}
              />
            </Col>
            <Col md={4}>
              <Form.Text style={{ fontSize: "13px" }}>Skill Match</Form.Text>
              <ProgressBar now={application.skillMatch} />
            </Col>
            <Col md={4}>
              <Form.Text style={{ fontSize: "12px" }}>Location Match</Form.Text>
              <ProgressBar now={application.locationMatch} />
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Form style={{ width: "100%" }}>
            <Form.Row>
              <Col md={6} style={{ textAlign: "center" }}>
                <Form.Label>First Name - John</Form.Label>
              </Col>
              <Col md={6}>
                <Form.Label>Last Name - Woodley</Form.Label>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col md={6} style={{ textAlign: "center" }}>
                <Form.Label>Submit Date - 5/25/2021</Form.Label>
              </Col>
              <Col md={6}>
                <Form.Label>Address - {application.address}</Form.Label>
              </Col>
            </Form.Row>
            <Form.Row>
              <Col md={6} style={{ textAlign: "center" }}>
                <Form.Label>
                  Skills - Industrial Worker, Forklift Driver, Heavy Workload
                </Form.Label>
              </Col>
              <Col md={6}>
                <Form.Label>Email - {application.email}</Form.Label>
              </Col>
            </Form.Row>
          </Form>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const ContactModal = ({ show, onHide, application }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default function CandidateRankings() {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [selectedApplication, setSelectedApplication] = useState({});
  const handleShow = (e, application) => {
    setSelectedApplication(application);
    setShow(true);
  };

  return (
    <Container style={{ fontFamily: "Inter,sans-serif", padding: "20px" }}>
      <CandidateModal
        show={showModal}
        onHide={handleClose}
        application={selectedApplication}
      />
      <Row>
        <Col md={6}>
          <h2 style={{ float: "left" }}>
            Applicant List ({applicantions.length})
          </h2>
        </Col>
        <Col md={5}>
          <h3 style={{ float: "left" }}>Select Job</h3>
          <div style={{ float: "left", padding: "5px" }}>
            <select
              style={{
                backgroundColor: "#fff",
                borderColor: "hsl(0,0%,80%)",
                borderRadius: "5px",
                height: "100%",
              }}
            >
              <option>{job.name}</option>
            </select>
          </div>
        </Col>
      </Row>
      <Row>
        <Table
          striped
          bordered
          hover
          style={{ backgroundColor: "white", borderRadius: "10px" }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Overall Match</th>
              <th>Name</th>
              <th>Applied On</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applicantions
              .sort((applicationA, applicationB) =>
                applicationA.skillMatch + applicationA.locationMatch <
                applicationB.skillMatch + applicationB.locationMatch
                  ? 1
                  : -1
              )

              .map((application, index) => {
                return (
                  <tr key={application.userId}>
                    <td
                      style={{
                        paddingRight: "1.25rem!important",
                        paddingLeft: "1.25rem!important",
                      }}
                    >
                      {index + 1}
                    </td>
                    <td>
                      <ProgressBar
                        style={{ borderRadius: "100px" }}
                        now={application.skillMatch + application.locationMatch}
                      />
                      {application.skillMatch + application.locationMatch} %
                    </td>
                    <td>
                      <div
                        style={{
                          minHeight: "36px",
                          minWidth: "36px",
                          maxWidth: "36px",
                          maxHeight: "36px",
                          borderRadius: "500px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          float: "left",
                        }}
                      >
                        <img src={application.image} width={36} height={36} />{" "}
                      </div>
                      <p style={{ float: "left", marginLeft: "7px" }}>
                        {application.name}
                      </p>
                    </td>
                    <td>{application.appliedOn}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={(e) => handleShow(e, application)}
                      >
                        View Details
                      </Button>
                      <Button variant="success" style={{ marginLeft: "15px" }}>
                        Contact Candidate
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>{" "}
        <div style={{ backgroundColor: "white", width: "100%" }}></div>
      </Row>

      <div>
        <h3>Search Entries</h3>
      </div>

      <Row>
        <Form>
          <Form.Row>
            <Col>
              <Form.Label>Applicant Name</Form.Label>
              <Form.Control placeholder="Enter first and last" />
            </Col>
            <Col>
              <Form.Label>Applicantion Submit Date</Form.Label>
              <Form.Control placeholder="Enter date" />
            </Col>
            <Col>
              <Form.Label>Overall Match %</Form.Label>
              <Form.Control placeholder="Enter a percentage" />
            </Col>
            <Col>
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="Enter address" />
            </Col>
            <Col>
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Enter email" />
            </Col>
            <Col>
              <Form.Label>Phone</Form.Label>
              <Form.Control placeholder="Enter phone" />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col md={7}></Col>
            <Col md={5}>
              <Button style={{ float: "right" }}>Submit</Button>
            </Col>
          </Form.Row>
        </Form>
      </Row>
    </Container>
  );
}

const job = {
  name: "Stand-Up Forklift Operator",
  postingCreateTime: Date.now(),
  location: "1030 Homeland Ave, Greensboro, NC, 27405",
  department: "Manufacturing",
  employmentTypes: ["Full-Time"],
  jobBenefits: "none",
  compensationInfo: {
    maxCompensation: 14,
    minCompensation: 13,
  },
  responsibilities: [
    "Operate various vehicles for storage or removal of materials",
    "Prepare products and materials for shipment",
    "Load, unload, and stage porudcts and materials",
    "Track and record units of materials handled",
    "Adhere to safety policies and procedures",
  ],
  qualifications: [
    {
      name: "Construction",
      description:
        "Experience in general labor, construction, or other related fields",
      experience: 4,
    },
    {
      name: "Industrial Vechiles",
      description:
        "Familiarity with pallet jack, forklift, or other industrial vehicles",
      experience: 5,
    },
    {
      name: "Physical Workload",
      description: "Ability to handle physical workload",
      experience: null,
    },
    {
      name: "Forklift Driver",
      description: null,
      experience: 5,
    },
  ],
  rejections: {
    distanceInMiles: 15,
    skillsMatched: 3,
  },
  location: {
    address: "1030 Homeland Ave, Greensboro, NC, 27405",
  },
};

const applicantions = [
  {
    name: "John Woodley",
    image: Image1,
    userId: 1,
    email: "JohnWoodley@gmail.com",
    phoneNumber: "9194848893",
    skills: [
      {
        name: "Industrial Vehicles",
        experience: 5,
      },
      {
        name: "Forklift Driver",
        experience: 5,
      },
      {
        name: "Construction",
        experience: 3,
      },
    ],
    address: "106 Grovecrest Way, Greensboro, NC",
    skillMatch: 65 * 0.75,
    locationMatch: 95 * 0.25,
    appliedOn: "5/30/2021",
  },

  {
    name: "Maia Grimley",
    image: Image3,
    userId: 2,
    email: "mgrim@yahoo.com",
    phoneNumber: "919484844",
    skills: [
      {
        name: "Industrial Vehicles",
        experience: 4,
      },
    ],
    address: "3949 Cates Loop Rd, Burlington, NC",
    skillMatch: 40 * 0.75,
    locationMatch: 45 * 0.25,
    appliedOn: "4/23/2021",
  },

  {
    name: "Tony Davis",
    userId: 3,
    image: Image2,
    email: "tdanza@gmail.com",
    phoneNumber: "9845685853",
    skills: [
      {
        name: "Industrial Vehicles",
        experience: 3,
      },
      {
        name: "Forklift Driver",
        experience: 3,
      },
      {
        name: "Construction",
        experience: 3,
      },
      {
        name: "Physical Workload",
        experience: null,
      },
    ],
    address: "210 Crutchfield St, Durham, NC",
    skillMatch: 80 * 0.75,
    locationMatch: 20 * 0.25,
    appliedOn: "6/01/2021",
  },
  {
    name: "James Kirkley",
    image: null,
    userId: 4,
    email: "datflyjkirk@gmail.com",
    phoneNumber: "9194848893",
    skills: [
      {
        name: "Industrial Vehicles",
        experience: 5,
      },
      {
        name: "Forklift Driver",
        experience: 5,
      },
      {
        name: "Construction",
        experience: 3,
      },
    ],
    address: "106 Grovecrest Way, Greensboro, NC",
    skillMatch: 40 * 0.75,
    locationMatch: 95 * 0.25,
    appliedOn: "5/30/2021",
  },
  {
    name: "Essence Bazely",
    image: null,
    userId: 5,
    email: "ebaz34@gmail.com",
    phoneNumber: "9194848893",
    skills: [
      {
        name: "Industrial Vehicles",
        experience: 5,
      },
      {
        name: "Forklift Driver",
        experience: 5,
      },
      {
        name: "Construction",
        experience: 3,
      },
    ],
    address: "920 Highland Ave",
    skillMatch: 55 * 0.75,
    locationMatch: 84 * 0.25,
    appliedOn: "4/11/2021",
  },
  {
    name: "Tiffany Vasquez",
    image: null,
    userId: 6,
    email: "tvaleravasquez@gmail.com",
    phoneNumber: "9194848893",
    skills: [
      {
        name: "Industrial Vehicles",
        experience: 5,
      },
      {
        name: "Forklift Driver",
        experience: 5,
      },
      {
        name: "Construction",
        experience: 3,
      },
    ],
    address: "920 Highland Ave",
    skillMatch: 40 * 0.75,
    locationMatch: 74 * 0.25,
    appliedOn: "4/11/2021",
  },
  {
    name: "Quentin Jackson",
    image: null,
    userId: 7,
    email: "quenJack@icloud.com",
    phoneNumber: "9194848893",
    skills: [
      {
        name: "Industrial Vehicles",
        experience: 5,
      },
      {
        name: "Forklift Driver",
        experience: 5,
      },
      {
        name: "Construction",
        experience: 3,
      },
    ],
    address: "920 Highland Ave",
    skillMatch: 95 * 0.6,
    locationMatch: 32 * 0.4,
    appliedOn: "4/11/2021",
  },
];
