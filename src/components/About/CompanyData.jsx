import React from 'react';
import './About.css';
import AppBar from 'material-ui/AppBar';

class CompanyData extends React.Component {
  render() {
    return (
      <div className="Component CompanyData">
        <AppBar
          className="component-app-bar-header"
          showMenuIconButton={false}
          title={this.props.languageObjectProp.data.companyData.title}
        />
        <div className="component-text-container">
          <p>{this.props.languageObjectProp.data.companyData.part1}</p>
          <p>{this.props.languageObjectProp.data.companyData.part2}</p>
          <p>{this.props.languageObjectProp.data.companyData.part3}</p>
          <p>{this.props.languageObjectProp.data.companyData.part4}</p>
          <p>{this.props.languageObjectProp.data.companyData.part5}</p>
        </div>
        
      </div>
    );
  }
}
export default CompanyData;