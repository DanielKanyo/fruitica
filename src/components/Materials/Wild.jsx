import React from 'react';
import '../About/About.css';
import './Materials.css';
import AppBar from 'material-ui/AppBar';

class Wild extends React.Component {
  render() {
    return (
      <div className="Component Wild">
        <AppBar
          className="component-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.wild.title}
        />
        <div className="component-text-container">
          <p>{this.props.languageObjectProp.data.wild.part1}</p>
          <p>{this.props.languageObjectProp.data.wild.part2}</p>
          <p>{this.props.languageObjectProp.data.wild.part3}</p>
          <p>{this.props.languageObjectProp.data.wild.part4}</p>
          <p>{this.props.languageObjectProp.data.wild.part5}</p>
          <p>{this.props.languageObjectProp.data.wild.part6}</p>
          <p>
            {this.props.languageObjectProp.data.wild.part7}
            <a target="_blank" rel="noopener noreferrer" href="https://www.wildflavors.com/">
              {this.props.languageObjectProp.data.wild.part8}
            </a>
          </p>
          <p>{this.props.languageObjectProp.data.wild.part9}</p>
          <p>{this.props.languageObjectProp.data.wild.part10}</p>
        </div>

      </div>
    );
  }
}
export default Wild;