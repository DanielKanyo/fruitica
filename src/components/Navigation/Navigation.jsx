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
    this.handleSubMenuItemToggle = this.handleSubMenuItemToggle.bind(this);
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

  handleMenuItemToggle(e, number) {
    let target = e.target;
    let submenu = document.getElementsByClassName("submenu" + number)[0];
    let svgElement = target.children[2];

    if (submenu.classList.contains("sm-active")) {
      submenu.classList.remove("sm-active");
      svgElement.style.transform = "rotate(0deg)";
    } else {
      submenu.classList.add("sm-active");
      svgElement.style.transform = "rotate(180deg)";
    }
  }

  handleSubMenuItemToggle(e, number) {
    let target = e.target;
    let submenu = document.getElementsByClassName("subsubmenu" + number)[0];
    let svgElement = target.children[2];

    if (submenu.classList.contains("ssm-active")) {
      submenu.classList.remove("ssm-active");
      svgElement.style.transform = "rotate(0deg)";
    } else {
      submenu.classList.add("ssm-active");
      svgElement.style.transform = "rotate(180deg)";
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
              {/* <MenuItem onClick={(e) => this.handleChangeLanguage(e)} className="language" primaryText="ENG" /> */}
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
                onClick={(e) => { this.handleMenuItemToggle(e, 1) }}
                label={this.state.languageObject.data.menuItems[0].title}
                labelPosition="before"
                icon={<ExpandMoreIcon style={styles.menuIconStyle} />}
              />

              <div className="submenu submenu1">
                <Link to={routes.COMPANYDATA}>
                  <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                    {this.state.languageObject.data.menuItems[0].item1}
                  </MenuItem>
                </Link>
                <Link to={routes.MISSION}>
                  <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                    {this.state.languageObject.data.menuItems[0].item2}
                  </MenuItem>
                </Link>
                <Link to={routes.NEWS}>
                  <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                    {this.state.languageObject.data.menuItems[0].item3}
                  </MenuItem>
                </Link>
                <Link to={routes.GALLERY}>
                  <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                    {this.state.languageObject.data.menuItems[0].item4}
                  </MenuItem>
                </Link>

                <FlatButton
                  className="menu-btn-sub-category"
                  fullWidth={true}
                  style={styles.flatButtonStyle}
                  onClick={(e) => { this.handleSubMenuItemToggle(e, 1) }}
                  label={this.state.languageObject.data.menuItems[0].item5}
                  labelPosition="before"
                  icon={<ExpandMoreIcon style={styles.menuIconStyle} />}
                />
                <div className="subsubmenu subsubmenu1">
                  <Link to={routes.COMETITION1}>
                    <MenuItem style={{ whiteSpace: 'normal' }} className="subsubmenu-item">
                      {this.state.languageObject.data.menuItems[0].subItem1}
                    </MenuItem>
                  </Link>
                </div>
              </div>

              {/* second */}
              <FlatButton
                className="menu-btn-category"
                fullWidth={true}
                style={styles.flatButtonStyle}
                onClick={(e) => { this.handleMenuItemToggle(e, 2) }}
                label={this.state.languageObject.data.menuItems[1].title}
                labelPosition="before"
                icon={<ExpandMoreIcon style={styles.menuIconStyle} />}
              />

              <div className="submenu submenu2">
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                  {this.state.languageObject.data.menuItems[1].item1}
                </MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                  {this.state.languageObject.data.menuItems[1].item2}
                </MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                  {this.state.languageObject.data.menuItems[1].item3}
                </MenuItem>
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