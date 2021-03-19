import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import {
  // handleClickUserLogOut,
  Navbar,
  Nav,
  FormControl,
  // Button,
  Form,
  Dropdown,
  // DropdownToggle,
} from "react-bootstrap";
import logoImg from "../images/logo.png";

import "./layout.css";

const Header = ({ siteTitle }) => (
  <header className="navigacija">
    <Navbar>
      <Nav className="container-fluid">
        <Nav.Item>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="officesDropButton">
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
            <FormControl
              type="text"
              placeholder="Search"
              className="searchBar"
            />
          </Form>
        </Nav.Item>
        <Nav.Item className="ml-auto">
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" className="languageDropButton">
              Language | English
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
      <nav class="navbar">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
          <li>
            <a class="navbar-brand" href="#">
              <img src={logoImg} class="img-responsive" alt=""></img>
            </a>
          </li>
        </div>

        <Nav.Item as="li">
          <Link to="/about" className="nav-link" activeClassName="active">
            About
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/consulting" className="nav-link" activeClassName="active">
            Consulting
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/financing" className="nav-link" activeClassName="active">
            Financing
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/Technology" className="nav-link" activeClassName="active">
            Technology
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/legal" className="nav-link" activeClassName="active">
            Legal
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/careers" className="nav-link" activeClassName="active">
            Careers
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/insights" className="nav-link" activeClassName="active">
            Insights
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/reviews" className="nav-link" activeClassName="active">
            Reviews
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link to="/contact" className="nav-link" activeClassName="active">
            Contact
          </Link>
        </Nav.Item>
        <i class="bi bi-calendar"></i>
        <button type="button" class="btn btn-primary" color="#00a1f1">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16" color="white">
            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
          </svg> Schedule a consultation
        </button>

        <button type="button" class="btn btn-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg>  1-800-000-0000
        </button>
      </nav>
    </div>

    <Navbar expand="md" bg="dark" variant="dark">
      {/* <Navbar.Brand href="/">{siteTitle}</Navbar.Brand> */}

      <Navbar.Toggle aria-controls="navbarResponsive"></Navbar.Toggle>
      <Navbar.Collapse id="navbarResponsive">
        <Nav as="ul">
          {/*    <Nav.Item as="li">
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
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};



export default Header;
