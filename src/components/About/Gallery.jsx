import React from 'react';
import './About.css';
import AppBar from 'material-ui/AppBar';

class Gallery extends React.Component {
  render() {
    return (
      <div className="About Gallery">
        <AppBar
          className="about-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.menuItems[0].item4}
        />
        <div className="about-text-container">
          <p></p>
        </div>
        
      </div>
    );
  }
}
export default Gallery;