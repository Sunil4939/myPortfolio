import React, { Component } from "react";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      // var cv = "pdf/" + this.props.data.image;
    }

    const downloadResume = () => {
      const pdfUrl = '../../../sunilResume.pdf';
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Sunil Prajapati Resume.pdf"; // specify the filename
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }; 

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Sunil Prajapati Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  {/* <a href={downloadResume} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a> */}
                  <button className="button" onClick={downloadResume}><i className="fa fa-download" style={{marginRight: 10}}></i>Download Resume</button>
                  {/* <img className="button" src={cv} alt="Chand Shaikh Resume" /> */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
