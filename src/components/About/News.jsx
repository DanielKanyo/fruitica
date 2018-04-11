import React from 'react';
import './About.css';
import AppBar from 'material-ui/AppBar';

class News extends React.Component {
  render() {
    return (
      <div className="About News">
        <AppBar
          className="about-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.menuItems[0].item3}
        />
        <div className="about-text-container">
          <p></p>
        </div>
        
      </div>
    );
  }
}
export default News;