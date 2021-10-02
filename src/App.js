import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>

        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{''}
          React CoderHouse
        </Navbar.Brand>

        <NavbarToggle />
        <NavbarCollapse>
          <Nav>
          <Nav.Link href="/">Principal</Nav.Link>
            <NavDropdown title="Productos">
              <NavDropdown.Item href="productos/chocolates">Chocoolates</NavDropdown.Item>
              <NavDropdown.Item href="productos/tortas">Tortas</NavDropdown.Item>
              <NavDropdown.Item href="productos/bombones">Bombones</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="productos/promociones">Promociones</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="nosotros">Nosotros</Nav.Link> 
            <Nav.Link href="ofertas">Ofertas</Nav.Link> 
            <Nav.Link href="contacto">Contacto</Nav.Link> 
          </Nav>
        </NavbarCollapse>

      </Navbar>

      <div className="content">
        Cuerpo del sitio.
      </div>
    </div>
  );
}

export default App;
