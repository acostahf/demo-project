import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import React from "react";

import "./productsPage.css";

function Products() {
  return (
    <MDBContainer>
      <MDBRow className="my-5 p-5 w-auto d-flex justify-content-around">
        <MDBCol
          lg="3"
          md="5"
          px="2"
          className="p-2 mb-lg-0 mb-4  border border-danger"
        >
          <h3>Lunch</h3>
          <MDBRow className="py-3">
            <MDBCol>
              <h4>tacos</h4>
              <p>shell, meat, cheese, vegs, sauce</p>
              <span>$13</span>
            </MDBCol>
          </MDBRow>
          <MDBRow className="py-3">
            <MDBCol>
              <h4>Shrimp Pasta</h4>
              <p>spag, alfredo, herbs, shrimp</p>
              <span>$20</span>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol
          lg="3"
          md="12"
          px="2"
          className="p-2 mb-lg-0 mb-4 border border-danger"
        >
          <h3>Dinner</h3>
          <MDBRow className="py-3">
            <MDBCol>
              <h4>Steak</h4>
              <p>med rare only, special sauce, side of fries, 12oz</p>
              <span>$40</span>
            </MDBCol>
          </MDBRow>
          <MDBRow className="py-3">
            <MDBCol>
              <h4>Another Steak</h4>
              <p>med rare only, special sauce, side of fries, 12oz</p>
              <span>$80</span>
            </MDBCol>
          </MDBRow>
        </MDBCol>

        <MDBCol
          lg="3"
          md="12"
          px="2"
          className="p-2 mb-lg-0 mb-4 border border-danger"
        >
          <h3>Drinks</h3>
          <MDBRow className="py-3">
            <MDBCol>
              <h4>Coffee</h4>
              <p>Mocha coffee, rare beans, milk, sugar</p>
              <span>reg $4 / lg $6</span>
            </MDBCol>
          </MDBRow>
          <MDBRow className="py-3">
            <MDBCol>
              <h4>Red Wine</h4>
              <p>Cab Sav, 2019, Washington Valley, 6oz</p>
              <span>$14</span>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Products;
