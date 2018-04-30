import React from 'react';
import '../About/About.css';
import AppBar from 'material-ui/AppBar';
import './Materials.css';

class Supperfood extends React.Component {
  render() {
    return (
      <div className="Component Supperfood">
        <div className="component-header-img supperfood-img"></div>
        <AppBar
          className="component-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.supperfood.title}
        />
        <div className="component-text-container">
          <h4>{this.props.languageObjectProp.data.supperfood.part1}</h4>
          <p>{this.props.languageObjectProp.data.supperfood.part2}</p>
          <h4>{this.props.languageObjectProp.data.supperfood.part3}</h4>
          <p>{this.props.languageObjectProp.data.supperfood.part4}</p>
          <p>{this.props.languageObjectProp.data.supperfood.part5}</p>
        </div>

      </div>
    );
  }
}
export default Supperfood;