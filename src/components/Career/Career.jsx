import React from 'react';
import '../About/About.css';
import AppBar from 'material-ui/AppBar';
import '../Materials/Materials.css';
import './Career.css';

class Career extends React.Component {
  render() {
    return (
      <div className="Component Career">
        <div className="component-header-img career-img"></div>
        <AppBar
          className="component-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.career.title}
        />
        <div className="component-text-container career-text-container">
          <p>{this.props.languageObjectProp.data.career.part1}</p>
          <p>{this.props.languageObjectProp.data.career.part2}</p>
          <p>{this.props.languageObjectProp.data.career.part3}</p>
          <p>{this.props.languageObjectProp.data.career.part4}</p>
        </div>

      </div>
    );
  }
}
export default Career;