import React from 'react';
import '../About/About.css';
import AppBar from 'material-ui/AppBar';

class Home extends React.Component {
  render() {
    return (
      <div className="Component">
        <AppBar
          className="component-app-bar-header"
          showMenuIconButton={false}
          title="Pozdravljam vas"
        />
        <div className="component-text-container">
          <p>Razvijanje sajta je u toku...</p>
        </div>
        
      </div>
    );
  }
}
export default Home;