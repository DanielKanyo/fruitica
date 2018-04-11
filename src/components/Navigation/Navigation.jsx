import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlagIcon from 'material-ui/svg-icons/content/flag';
import IconMenu from 'material-ui/IconMenu';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import ExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import FlatButton from 'material-ui/FlatButton';
import './Navigation.css';

const styles = {
  menuIconStyle: {
    marginRight: 12,
    marginLeft: 24,
    fontSize: '24px',
    float: 'right',
    marginTop: 7,
  },
  flatButtonStyle: {
    textAlign: 'left',
    textTransform: 'capitalize',
    height: '45px'
  }
};

class Navigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      languageObject: props.languageObjectProp,
      open: true,
    }
    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    this.handleMenuItemToggle = this.handleMenuItemToggle.bind(this);
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

  /** handle drawer */
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

  handleMenuItemToggle(number) {
    let submenu = document.getElementsByClassName("submenu" + number)[0];
    
    if (submenu.classList.contains("sm-active")) {
      submenu.classList.remove("sm-active");
    } else {
      submenu.classList.add("sm-active");
    }
  }

  /** render */
  render() {
    return (
      <div className="Navigation">
        <AppBar
          className="app-bar"
          title={<Link to={routes.HOME}><h1>Fruitica d.o.o</h1></Link>}
          iconElementLeft={<IconButton className="hamb-icon"><NavigationMenu onClick={this.handleToggle} /></IconButton>}
          iconElementRight={
            <IconMenu iconButtonElement={<IconButton><FlagIcon /></IconButton>}
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

              {/* first */}
              <FlatButton
                className="menu-btn-category"
                fullWidth={true}
                style={styles.flatButtonStyle}
                onClick={() => { this.handleMenuItemToggle(1) }}
                label={this.state.languageObject.data.menuItems[0].title}
                labelPosition="before"
                icon={<ExpandMoreIcon style={styles.menuIconStyle} />}
              />
              
              <div className="submenu submenu1">
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">{this.state.languageObject.data.menuItems[0].item1}</MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">{this.state.languageObject.data.menuItems[0].item2}</MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">{this.state.languageObject.data.menuItems[0].item3}</MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">{this.state.languageObject.data.menuItems[0].item4}</MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">{this.state.languageObject.data.menuItems[0].item5}</MenuItem>
              </div>

              {/* second */}
              <FlatButton
                className="menu-btn-category"
                fullWidth={true}
                style={styles.flatButtonStyle}
                onClick={() => { this.handleMenuItemToggle(2) }}
                label={this.state.languageObject.data.menuItems[1].title}
                labelPosition="before"
                icon={<ExpandMoreIcon style={styles.menuIconStyle} />}
              />

              <div className="submenu submenu2">
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">{this.state.languageObject.data.menuItems[1].item1}</MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">{this.state.languageObject.data.menuItems[1].item2}</MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">{this.state.languageObject.data.menuItems[1].item3}</MenuItem>
              </div>
              
              {/* third */}
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