import React from 'react';
import './About.css';
import AppBar from 'material-ui/AppBar';
import img1 from '../../images/kormany_tamogatas_logo.jpg';

class Competition extends React.Component {
  render() {
    return (
      <div className="About Competition">
        <AppBar
          className="about-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.menuItems[0].subItem1}
        />
        <div className="about-text-container">
          <p>{this.props.languageObjectProp.data.competition1.part1}</p>
          <p>{this.props.languageObjectProp.data.competition1.part2}</p>
          <p>{this.props.languageObjectProp.data.competition1.part3}</p>
          <p>{this.props.languageObjectProp.data.competition1.part4}</p>
          <p>{this.props.languageObjectProp.data.competition1.part5}</p>
          <p>
            <b>{this.props.languageObjectProp.data.competition1.part6} </b>
            {this.props.languageObjectProp.data.competition1.part7}
          </p>
          <p>
            <b>{this.props.languageObjectProp.data.competition1.part8} </b>
            {this.props.languageObjectProp.data.competition1.part9}
          </p>
          <p>
            <b>{this.props.languageObjectProp.data.competition1.part10}</b><br/>
            <span>{this.props.languageObjectProp.data.competition1.part11}</span><br/>
            <span>{this.props.languageObjectProp.data.competition1.part12}</span><br/>
            <span>{this.props.languageObjectProp.data.competition1.part13}</span><br/>
            <span>{this.props.languageObjectProp.data.competition1.part14}</span><br/>
            <span><a target="_blank" rel="noopener noreferrer" href="https://www.fruitica.rs/">www.fruitica.rs</a></span>
            <img src={img1} alt=""/>
          </p>
        </div>

      </div>
    );
  }
}
export default Competition;