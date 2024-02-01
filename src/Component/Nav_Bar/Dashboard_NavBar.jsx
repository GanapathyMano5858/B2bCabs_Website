import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Profile from "../../Asset/Profile.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Dashboard_Navbar.css";

function Dashboard_Navbar() {
  return (
    <>
      {["false, 'sm', 'md', 'lg', 'xl', 'xxl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-tertiary bg-success outline position-fixed z-2 w-100 "
          bg="dark"
          data-bs-theme="dark"
        >
          <Container fluid>
            <Navbar.Brand href="#">B2B Cabs</Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="focus-ring focus-ring-dark border border-0"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <div className="profile">
                {/* <div className="circle-1"></div>
                        <div className="circle-2"></div>
                        <div className="circle-3"></div>
                        <div className="circle-4"></div>
                        <div className="circle-5"></div>
                        <div className="circle-6"></div> */}
                <div className="d-flex flex-column gap-2">
                  <div className="profileCirlce">
                    {/* <div className="profileCirlce2"> */}
                    <div className="pofileImage">
                      <img
                        src={Profile}
                        alt="profileicon"
                        className="w-100 h-100"
                      />
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="name" style={{ fontSize: "25px" }}>
                    William Johnson
                  </div>
                  <div
                    className="viewProfile"
                    style={{ color: "var(--PrimaryColor)" }}
                  >
                    <p className="m-0">View Profile</p>
                  </div>
                  <hr className="my-0" />
                  <div className="d-flex justify-content-between align-items-center">
                    {/* <div><img src="" alt="" /></div> */}
                    <div style={{ fontSize: "25px", fontWeight: "500" }}>
                      <span style={{ fontFamily: "Outfit , sans-serif" }}>
                        ₹
                      </span>
                      &nbsp; 15,000
                    </div>
                    <div className="btn d-flex align-items-center">
                      <i class="fa-solid fa-circle-plus"></i> &nbsp; Add
                    </div>
                  </div>
                </div>
              </div>
              <Offcanvas.Header
                closeButton
                className="text-light closebutton"
                style={{ color: "var(--whiteColor)" }}
              >
                {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title> */}
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 gap-4">
                  {/* <div
                    className="px-4 py-2 rounded rounded-3"
                    style={{ backgroundColor: "var(--cardBG)" }}
                  >
                    <h5>
                      <b>Manage Booking</b>
                    </h5>
                    <Nav.Link className="ps-4" href="#action1">
                      Upcoming Booking
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      Canceled Booking
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      Past Booking
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      Driver Status
                    </Nav.Link>
                  </div> */}
                  <div
                    className="px-4 py-2 rounded rounded-3"
                    style={{ backgroundColor: "var(--whiteColor)" }}
                  >
                    <h5>Manage Booking</h5>
                    <Nav.Link className="ps-4" href="#action1">
                      Upcoming Booking
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      Canceled Booking
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      Past Booking
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      Driver Status
                    </Nav.Link>
                  </div>
                  <div
                    className="px-4 py-2 rounded rounded-3"
                    style={{ backgroundColor: "var(--whiteColor)" }}
                  >
                    <h5>Finance Details</h5>
                    <Nav.Link className="ps-4" href="#action1">
                      Invoice
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      Payment History
                    </Nav.Link>
                  </div>
                  <div
                    className="px-4 py-2 rounded rounded-3"
                    style={{ backgroundColor: "var(--whiteColor)" }}
                  >
                    <h5>Support</h5>
                    <Nav.Link className="ps-4" href="#action1">
                      Chart Support
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      User Management
                    </Nav.Link>
                    <Nav.Link className="ps-4" href="#action2">
                      Notification
                    </Nav.Link>
                    <Nav.Link className="ps-4 text-danger" href="#action2">
                      Sign out
                    </Nav.Link>
                  </div>
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <div className="navAD"></div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Dashboard_Navbar;
