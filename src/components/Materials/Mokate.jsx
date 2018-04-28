import React from 'react';
import '../About/About.css';
import './Materials.css';
import AppBar from 'material-ui/AppBar';
import Expand from 'react-expand-animated';
import IconButton from 'material-ui/IconButton';
import ArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down';

class Mokate extends React.Component {

  state = {
    open1: false,
    open2: false,
    open3: false,
  };

  toggle = (e, val) => {
    let targetElement = e.target.children[1].children[0];

    if (targetElement.classList.contains("arrow-collapse-rotate")) {
      targetElement.classList.remove("arrow-collapse-rotate");
    } else {
      targetElement.classList.add("arrow-collapse-rotate");
    }

    switch (val) {
      case "mokacb":
        this.setState(prevState => ({ open1: !prevState.open1 }));
        break;
      case "mokaero":
        this.setState(prevState => ({ open2: !prevState.open2 }));
        break;
      case "mokasw":
        this.setState(prevState => ({ open3: !prevState.open3 }));
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="Component Mokate">
        {/* mokacb */}
        <AppBar
          className="component-app-bar-header header-mokacb"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.mokate.mokacb.title}
          onClick={(e) => this.toggle(e, "mokacb")}
          iconElementRight={<IconButton className=""><ArrowDown /></IconButton>}
        />

        <Expand className="expand-container" open={this.state.open1}>
          <div className="component-text-container text-container-mokacb">
            <p>{this.props.languageObjectProp.data.mokate.mokacb.part1}</p>
            <h4>{this.props.languageObjectProp.data.mokate.mokacb.part2}</h4>
            <ul>
              {this.props.languageObjectProp.data.mokate.mokacb.part3.map((value, i) =>
                <li key={i}>
                  {value}
                </li>
              )}
            </ul>
            <h4>{this.props.languageObjectProp.data.mokate.mokacb.part4}</h4>
            <ul>
              {this.props.languageObjectProp.data.mokate.mokacb.part5.map((value, i) =>
                <li key={i}>
                  {value}
                </li>
              )}
            </ul>
          </div>
        </Expand>
        {/* mokaero */}
        <AppBar
          className="component-app-bar-header header-mokaero"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.mokate.mokaero.title}
          onClick={(e) => this.toggle(e, "mokaero")}
          iconElementRight={<IconButton className=""><ArrowDown /></IconButton>}
        />

        <Expand className="expand-container" open={this.state.open2}>
          <div className="component-text-container text-container-mokaero">
            <p>{this.props.languageObjectProp.data.mokate.mokaero.part1}</p>
            <p>{this.props.languageObjectProp.data.mokate.mokaero.part2}</p>
            <p>{this.props.languageObjectProp.data.mokate.mokaero.part3}</p>
            <h4>{this.props.languageObjectProp.data.mokate.mokaero.part4}</h4>
            <ul>
              {this.props.languageObjectProp.data.mokate.mokaero.part5.map((value, i) =>
                <li key={i}>
                  {value}
                </li>
              )}
            </ul>
            <h4>{this.props.languageObjectProp.data.mokate.mokaero.part6}</h4>
            <ul>
              {this.props.languageObjectProp.data.mokate.mokaero.part7.map((value, i) =>
                <li key={i}>
                  {value}
                </li>
              )}
            </ul>
          </div>
        </Expand>
        {/* mokasw */}
        <AppBar
          className="component-app-bar-header header-mokasw"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.mokate.mokasw.title}
          onClick={(e) => this.toggle(e, "mokasw")}
          iconElementRight={<IconButton className=""><ArrowDown /></IconButton>}
        />

        <Expand className="expand-container" open={this.state.open3}>
          <div className="component-text-container text-container-mokasw">
            <p>{this.props.languageObjectProp.data.mokate.mokasw.part1}</p>
            <h4>{this.props.languageObjectProp.data.mokate.mokasw.part2}</h4>
            <ul>
              {this.props.languageObjectProp.data.mokate.mokasw.part3.map((value, i) =>
                <li key={i}>
                  {value}
                </li>
              )}
            </ul>
            <h4>{this.props.languageObjectProp.data.mokate.mokasw.part4}</h4>
            <ul>
              {this.props.languageObjectProp.data.mokate.mokasw.part5.map((value, i) =>
                <li key={i}>
                  {value}
                </li>
              )}
            </ul>
          </div>
        </Expand>

      </div>
    );
  }
}
export default Mokate;