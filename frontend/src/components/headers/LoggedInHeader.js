import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
import LogoImage from "../../assets/peoplecount.jpg";

export default function LoggedInHeader() {
  return (
    <Navbar className="border border-primary">
      <Navbar.Brand href="/">Staffing Logistics</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/auth/google/applicant">For Candidates</Nav.Link>
        <Nav.Link href="/auth/google/employer">For Employers</Nav.Link>

        <Nav.Link className="blue-text" href="/api/logout">
          Logout
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <Button variant="outline-primary">Search</Button>
    </Navbar>
  );
}
