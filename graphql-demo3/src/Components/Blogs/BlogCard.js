import React from "react";
import { GridColumn } from "semantic-ui-react";
import "../../Assets/CSS/PopularProducts.css";
import { Link } from "react-router-dom"
import EmptyBlogs from "../../Assets/Images/EmptyBlogs.jpeg"

class Products extends React.Component {
  render() {
    let c = this.props.item;
    return (
      <GridColumn mobile={16} tablet={8} computer={5} id="blogs-container">
        <Link to={"/blog/"+c.id+"/"+c.title.replace(/\s/g, '-')}>
          <img id="cover-image" src={c.image ? "https://s3.ap-south-1.amazonaws.com/business.strackit.com/"+c.image : EmptyBlogs} />
          <div id="timestamp">{"Created On: "+c.timestamp}</div>
          <div id="blog-title">{c.title}</div>
        </Link>
      </GridColumn>
    );
  }
}

export default Products;