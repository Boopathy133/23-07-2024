import React from "react";
import PopularProducts from './PopularPoducts';

class Products extends React.Component {
  render() {
    return (
      <div>
        <div style={{marginTop: '5%'}}><PopularProducts /></div>
      </div>
    );
  }
}

export default Products;