import React from 'react';
// import { Link } from 'react-router-dom';
// import * as routes from '../../constants/routes';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import './Navigation.css';

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      languageObject: props.languageObjectProp,
      open: true,
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

  handleToggle = () => this.setState({ open: !this.state.open });

  /** if screen smaller than 900 pixel hide drawer */
  componentWillMount() {
    let w = window;
    if (w.innerWidth < 900) {
      this.setState({
        open: false
      })
    }
  }

  /** render */
  render() {
    return (
      <div className="Navigation">
        <AppBar
          className="app-bar"
          iconElementLeft={<IconButton className="hamb-icon"><NavigationMenu onClick={this.handleToggle} /></IconButton>}
          iconElementRight={
            <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              targetOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            >
              <MenuItem onClick={(e) => this.handleChangeLanguage(e)} className="language" primaryText="ENG" />
              <MenuItem onClick={(e) => this.handleChangeLanguage(e)} className="language" primaryText="HUN" />
              <MenuItem onClick={(e) => this.handleChangeLanguage(e)} className="language" primaryText="SRB" />
            </IconMenu>
          }
        />
        <div className="mini-header">
          Uvoz i trgovina na veliko prehrambenim proizvodima, sirovinama i aditivima.
        </div>
        <div>
          <Drawer className="drawer" open={this.state.open}>
            <div className="close-drawer-container">
              <IconButton><NavigationClose onClick={this.handleToggle} /></IconButton>
            </div>
            <div className="drawer-header">Fruitica d.o.o</div>
            <div className="drawer-mini-header"></div>
            <MenuItem>Menu Item</MenuItem>
            <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
        </div>
      </div>
    );
  }
}
export default Navigation;