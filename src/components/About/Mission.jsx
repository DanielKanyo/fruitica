import React from 'react';
import './About.css';
import AppBar from 'material-ui/AppBar';

class Mission extends React.Component {
  render() {
    return (
      <div className="About Mission">
        <AppBar
          className="about-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.menuItems[0].item2}
        />
        <div className="about-text-container">
          <p>{this.props.languageObjectProp.data.mission.part1}</p>
          <br />
          <p>{this.props.languageObjectProp.data.mission.part2}</p>
          <br />
          <p>{this.props.languageObjectProp.data.mission.part3}</p>
          <p>{this.props.languageObjectProp.data.mission.part4}</p>
          <p>{this.props.languageObjectProp.data.mission.part5}</p>
          <ul>
            <li>{this.props.languageObjectProp.data.mission.part6}</li>
            <li>{this.props.languageObjectProp.data.mission.part7}</li>
            <li>{this.props.languageObjectProp.data.mission.part8}</li>
            <li>{this.props.languageObjectProp.data.mission.part9}</li>
            <li>{this.props.languageObjectProp.data.mission.part10}</li>
            <li>{this.props.languageObjectProp.data.mission.part11}</li>
            <li>{this.props.languageObjectProp.data.mission.part12}</li>
            <li>{this.props.languageObjectProp.data.mission.part13}</li>
            <li>{this.props.languageObjectProp.data.mission.part14}</li>
          </ul>
          <br/>
          <table>
            <tbody>
              <tr>
                <td>{this.props.languageObjectProp.data.mission.part15}</td>
                <td>{this.props.languageObjectProp.data.mission.part16}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    );
  }
}
export default Mission;