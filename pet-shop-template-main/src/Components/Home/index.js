import React from "react";
import Products from '../Products';
import { CarosuelImage } from "../Carosuel";
import Blogs from "../Blogs";

class Car extends React.Component {
  render() {
    return (
      <div style={{marginTop: '2%'}}>
        <CarosuelImage />
        <Products />
        <Blogs />
      </div>
    );
  }
}

export default Car;