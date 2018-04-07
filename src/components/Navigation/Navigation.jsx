import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navigation.css';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      languageObject:  props.languageObjectProp
    }
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  /** catch the language state change event, and change this component's state too */
  componentWillReceiveProps(nextProps) {
    this.setState({
      languageObject: nextProps.languageObjectProp
    });
  }

  /** pass language string to App component */
  handleChangeLanguage(e) {
    let language = e.target.innerHTML;
    this.props.changeLanguageProp(language);
  }

  /** render */
  render() {
    return (
      <div className="Navigation">
        <Navbar collapseOnSelect fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={routes.HOME}>Fruitica</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={routes.ABOUT}>
                <NavItem eventKey={1}>{this.state.languageObject.data.menuItems[0]}</NavItem>
              </LinkContainer>
              <LinkContainer to={routes.CONTACT}>
                <NavItem eventKey={2}>{this.state.languageObject.data.menuItems[1]}</NavItem>
              </LinkContainer>
              <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1} href="#" onClick={(e) => this.handleChangeLanguage(e)}>
                {this.state.languageObject.data.languages[0]}
              </NavItem>
              <NavItem eventKey={2} href="#" onClick={(e) => this.handleChangeLanguage(e)}>
                {this.state.languageObject.data.languages[1]}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;