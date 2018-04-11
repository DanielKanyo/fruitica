import React from 'react';
import '../About/About.css';
import AppBar from 'material-ui/AppBar';

class Home extends React.Component {
  render() {
    return (
      <div className="About Mission">
        <AppBar
          className="about-app-bar-header"
          showMenuIconButton={false}
          title="Üdvözöllek"
        />
        <div className="about-text-container">
          <p>A weboldal jelenleg fejlesztés alatt áll...</p>
        </div>
        
      </div>
    );
  }
}
export default Home;