import React from 'react';
import '../About/About.css';
import AppBar from 'material-ui/AppBar';
import MapContainer from './MapContainer';
import './Contact.css';

class Contact extends React.Component {
  render() {
    return (
      <div className="Component Contact">
        <AppBar
          className="component-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.contact.title}
        />
        <div className="component-text-container">
          <div className="map">
            <MapContainer />
          </div>
        </div>

      </div>
    );
  }
}
export default Contact;