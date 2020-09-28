import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
} from "mdbreact";
import React from "react";
import "./contactPage.css";

function contact() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <form className=" mt-4">
            <p className="h1 text-center mb-4">Contact us</p>

            <MDBInput
              label="Your Name"
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />

            <br />

            <MDBInput
              label="Your Email"
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <MDBInput
              label="Subject"
              type="textarea"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <MDBInput
              label="Your Message"
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <MDBBtn color="default" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default contact;
