import React from 'react';
import '../About/About.css';
import AppBar from 'material-ui/AppBar';
import './Materials.css';

class Mprofood extends React.Component {
  render() {
    return (
      <div className="Component Mprofood">
        <div className="component-header-img mprofood-img"></div>
        <AppBar
          className="component-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.mprofood.title}
        />
        <div className="component-text-container mprofood-text-container">
          <ul>
            {this.props.languageObjectProp.data.mprofood.part1.map((value, i) =>
              <li key={i}>
                <a 
                  href={"http://www.profood.hu/hu/termekeink/husipar/" + this.props.languageObjectProp.data.mprofood.part2[i]} 
                  target="_blank" 
                  rel="noopener noreferrer">
                  {value}
                </a>
              </li>
            )}
          </ul>
        </div>

      </div>
    );
  }
}
export default Mprofood;