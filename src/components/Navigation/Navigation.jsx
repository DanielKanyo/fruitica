import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
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
    height: '45px',
    whiteSpace: 'normal'
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
    this.handleToggle = this.handleToggle.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
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
  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  /** if screen smaller than 900 pixel hide drawer */
  componentWillMount() {
    let w = window;
    if (w.innerWidth < 900) {
      this.setState({
        open: false
      });
    }
  }

  /** open or close submenu */
  handleMenuItemToggle(e, number) {
    let target = e.target;
    let submenu = document.getElementsByClassName("submenu" + number)[0];
    let svgElement = target.children[0].children[1];

    if (submenu.classList.contains("sm-active")) {
      submenu.classList.remove("sm-active");
      svgElement.style.transform = "rotate(0deg)";
    } else {
      submenu.classList.add("sm-active");
      svgElement.style.transform = "rotate(180deg)";
    }
  }

  /** open or close subsubmenu */
  handleSubMenuItemToggle(e, number) {
    let target = e.target;
    let submenu = document.getElementsByClassName("subsubmenu" + number)[0];
    let svgElement = target.children[0].children[1];

    if (submenu.classList.contains("ssm-active")) {
      submenu.classList.remove("ssm-active");
      svgElement.style.transform = "rotate(0deg)";
    } else {
      submenu.classList.add("ssm-active");
      svgElement.style.transform = "rotate(180deg)";
    }
  }

  hideMenu() {
    let w = window;
    if (w.innerWidth < 900) {
      this.setState({
        open: false
      });
    }
  }

  /** render */
  render() {
    return (
      <div className="Navigation">
        <AppBar
          className="app-bar"
          title={<Link to={routes.HOME}><div className="page-title-placeholder"></div></Link>}
          iconElementLeft={<IconButton className="hamb-icon"><NavigationMenu /></IconButton>}
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={<div className="language-select">
            <FlatButton onClick={(e) => this.handleChangeLanguage(e)} label="ENG" />
            <FlatButton onClick={(e) => this.handleChangeLanguage(e)} label="SRB" />
            <FlatButton onClick={(e) => this.handleChangeLanguage(e)} label="HUN" />
          </div>
          }
        />
        <div className="mini-header">
          Uvoz i trgovina na veliko prehrambenim proizvodima, sirovinama i aditivima. | Trg Republike 7., 24220 Čantavir, Tel: +381 24 782 600, office@fruitica.info
        </div>

        <div>
          <Drawer className="drawer" open={this.state.open}>

            <div className="close-drawer-container">
              <IconButton onClick={() => this.handleToggle()}><NavigationClose /></IconButton>
            </div>

            <div className="drawer-header">
              {this.state.languageObject.data.menuItems[0].drawerTitle}
            </div>
            <div className="drawer-mini-header"></div>

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
                <Link to={routes.COMPANYDATA} onClick={() => { this.hideMenu() }}>
                  <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                    {this.state.languageObject.data.menuItems[0].item1}
                  </MenuItem>
                </Link>
                <Link to={routes.MISSION} onClick={() => { this.hideMenu() }}>
                  <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                    {this.state.languageObject.data.menuItems[0].item2}
                  </MenuItem>
                </Link>
                <Link to={routes.NEWS} onClick={() => { this.hideMenu() }}>
                  <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                    {this.state.languageObject.data.menuItems[0].item3}
                  </MenuItem>
                </Link>
                <Link to={routes.GALLERY} onClick={() => { this.hideMenu() }}>
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
                  <Link to={routes.COMETITION1} onClick={() => { this.hideMenu() }}>
                    <MenuItem style={{ whiteSpace: 'normal' }} className="subsubmenu-item">
                      {this.state.languageObject.data.menuItems[0].subItem51}
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
                  {this.state.languageObject.data.menuItems[1].item2}
                </MenuItem>
                <MenuItem style={{ whiteSpace: 'normal' }} className="submenu-item">
                  {this.state.languageObject.data.menuItems[1].item3}
                </MenuItem>

                <FlatButton
                  className="menu-btn-sub-category"
                  fullWidth={true}
                  style={styles.flatButtonStyle}
                  onClick={(e) => { this.handleSubMenuItemToggle(e, 2) }}
                  label={this.state.languageObject.data.menuItems[1].item1}
                  labelPosition="before"
                  icon={<ExpandMoreIcon style={styles.menuIconStyle} />}
                />
                <div className="subsubmenu subsubmenu2">
                  <Link to={routes.WILD} onClick={() => { this.hideMenu() }}>
                    <MenuItem style={{ whiteSpace: 'normal' }} className="subsubmenu-item">
                      {this.state.languageObject.data.menuItems[1].subItem11}
                    </MenuItem>
                  </Link>
                  <Link to={routes.MOKATE} onClick={() => { this.hideMenu() }}>
                    <MenuItem style={{ whiteSpace: 'normal' }} className="subsubmenu-item">
                      {this.state.languageObject.data.menuItems[1].subItem12}
                    </MenuItem>
                  </Link>
                  <Link to={routes.SUPPERFOOD} onClick={() => { this.hideMenu() }}>
                    <MenuItem style={{ whiteSpace: 'normal' }} className="subsubmenu-item">
                      {this.state.languageObject.data.menuItems[1].subItem13}
                    </MenuItem>
                  </Link>
                  <Link to={routes.MPROFOOD} onClick={() => { this.hideMenu() }}>
                    <MenuItem style={{ whiteSpace: 'normal' }} className="subsubmenu-item">
                      {this.state.languageObject.data.menuItems[1].subItem14}
                    </MenuItem>
                  </Link>
                </div>
              </div>

              {/* third */}
              <Link to={routes.CAREER} onClick={() => { this.hideMenu() }}>
                <MenuItem>{this.state.languageObject.data.menuItems[2].title}</MenuItem>
              </Link>
              {/* forth */}
              <Link to={routes.CONTACT} onClick={() => { this.hideMenu() }}>
                <MenuItem>{this.state.languageObject.data.menuItems[3].title}</MenuItem>
              </Link>
            </div>

          </Drawer>
        </div>
      </div >
    );
  }
}
export default Navigation;