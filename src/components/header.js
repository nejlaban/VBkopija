import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { handleClickUserLogOut, Navbar, Nav, FormControl, Button, Form, Dropdown, DropdownToggle } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header>

    <Navbar bg="dark" variant="dark">

      <Nav className="container-fluid">
        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Offices
   </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">French</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Canadian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>

        <Nav.Item className="ml-auto">
          <Form inline>
            <Button variant="outline-info" className="mr-sm-2">Search</Button>

            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
        </Nav.Item>
        <Nav.Item className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Language
  </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">French</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Canadian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav.Item>
      </Nav>


    </Navbar>


    {/*siteTitle*/}

    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-white p-4">
          <h5 class="text-white h4">Collapsed content</h5>
          <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
         <li><a class="navbar-brand" href="#"><img src="./images/logo.png" class="img-responsive"></img></a></li> 

        </div>

        <Nav.Item as="li">
          <Link to="/about" className="nav-link" activeClassName="active">About
             </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/consulting" className="nav-link" activeClassName="active">Consulting
             </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/financing" className="nav-link" activeClassName="active">Financing
             </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/Technology" className="nav-link" activeClassName="active">Technology
             </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/legal" className="nav-link" activeClassName="active">Legal
             </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/careers" className="nav-link" activeClassName="active">Careers
             </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/insights" className="nav-link" activeClassName="active">Insights
             </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/reviews" className="nav-link" activeClassName="active">Reviews
             </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/contact" className="nav-link" activeClassName="active">Contact
             </Link>
        </Nav.Item>
        <button type="button" class="btn btn-primary">Schedule a consultation</button>
        
        <button type="button" class="btn btn-primary">1-800-000-0000</button>

      </nav>

    </div>

    <Navbar expand="md" bg="dark" variant="dark">

      {/* <Navbar.Brand href="/">{siteTitle}</Navbar.Brand> */}

      <Navbar.Toggle aria-controls="navbarResponsive" ></Navbar.Toggle>
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul" >
          { /*    <Nav.Item as="li">
            <Link to="/about" className="nav-link" activeClassName="active">About
             </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/consulting" className="nav-link" activeClassName="active">Consulting
             </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/financing" className="nav-link" activeClassName="active">Financing
             </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/Technology" className="nav-link" activeClassName="active">Technology
             </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/legal" className="nav-link" activeClassName="active">Legal
             </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/careers" className="nav-link" activeClassName="active">Careers
             </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/insights" className="nav-link" activeClassName="active">Insights
             </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/reviews" className="nav-link" activeClassName="active">Reviews
             </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/contact" className="nav-link" activeClassName="active">Contact
             </Link>
          </Nav.Item> */}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>

)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
