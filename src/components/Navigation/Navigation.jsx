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
          title="Fruitica d.o.o"
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

        <div>
          <Drawer className="drawer" open={this.state.open}>

            <div className="close-drawer-container">
              <IconButton><NavigationClose onClick={this.handleToggle} /></IconButton>
            </div>

            <div className="drawer-header"></div>

            <div className="drawer-menu-items">
              <MenuItem>{this.state.languageObject.data.menuItems[0].title}</MenuItem>
              <div className="submenu submenu1">
                <MenuItem style={{whiteSpace: 'normal'}} className="submenu-item">{this.state.languageObject.data.menuItems[0].item1}</MenuItem>
              </div>

              <MenuItem>{this.state.languageObject.data.menuItems[1].title}</MenuItem>
              <MenuItem>{this.state.languageObject.data.menuItems[2].title}</MenuItem>
              <MenuItem>{this.state.languageObject.data.menuItems[3].title}</MenuItem>
              <MenuItem>{this.state.languageObject.data.menuItems[4].title}</MenuItem>
              <MenuItem>{this.state.languageObject.data.menuItems[5].title}</MenuItem>
              <MenuItem>{this.state.languageObject.data.menuItems[6].title}</MenuItem>
            </div>

          </Drawer>
        </div>
      </div>
    );
  }
}
export default Navigation;