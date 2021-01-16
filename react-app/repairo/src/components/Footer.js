
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
   
    <MDBFooter color="mdb-color" className="font-small pt-4 mt-4" fixed-bottom="true">
      <hr className="w-100 clearfix d-md-none" />
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              REPAIRO
            </h6>
            <p>
            Repairo is the best repair centre for your device.</p>
            <p>We specialize in cellular and laptop repairs, as well as software installation.
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
            <p>
              <a href="/home">About us</a>
            </p>
            <p>
              <a href="/services">Services</a>
            </p>
            <p>
              <a href="/newRepairOrder">Request a repair order</a>
            </p>
            <p>
              <a href="/newClient">Register</a>
            </p>
            
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
         
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-home mr-3" /> Timisoara, TM 311729, RO
            </p>
            <p>
              <i className="fa fa-envelope mr-3" /> contact@repairo.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 40 987 654 321
            </p>
            <p>
              <i className="fa fa-print mr-3" /> + 40 123 456 789
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              REPAIRO
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                </li>
               
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

export default Footer;