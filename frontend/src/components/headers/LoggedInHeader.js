import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import LogoImage from "../../assets/peoplecount.jpg";
import Sidebar from "../sidebar/Sidebar";

export default function LoggedInHeader() {
  return (
    <div className="fit-content">
      <Navbar className="border border-primary">
        <Nav>
          <Sidebar />
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link className="blue-text" href="/api/logout">
            Logout
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/auth/google/applicant">For Candidates</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="/auth/google/employer">For Employers</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
        <Button variant="outline-primary">Search</Button>
      </Navbar>
    </div>
  );
}
