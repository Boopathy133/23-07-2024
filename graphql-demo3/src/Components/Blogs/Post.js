import React from "react";
import styled from "styled-components";
import client from '../../ApolloClient';
import { gql } from "@apollo/client";
import '../../Assets/CSS/Blogs.css';
import { withRouter } from 'react-router-dom';
import EmptyBlogs from "../../Assets/Images/EmptyBlogs.jpeg"

const StyledText = styled.div`
  font-family: "Raleway", sans-serif;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 34px;
  color: #000000;
  margin-top: 2%;
`;

const getBlogs = gql`
  query Blog($filter: blogFilter) {
    Blog(filter: $filter) {
      id
      title
      image
      description
      url
      timestamp
      shopId
    }
  }
`;

class Blogs extends React.Component {

  state = {
    blogs: []
  }

  async componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.getBlogs();
  }

  getBlogs = async () => {
    this.setState({ loading: true })
    try {
      const { data } = await client.query({
        query: getBlogs,
        variables: {
          filter: {
            shopId: 347,
          },
        },
      });
      this.setState({ blogs: data.Blog.slice(0, this.props.count), loading: false });
    } catch (error) {
      console.error("Error:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    let id = this.props.id;
    return (
      <div id="single-blog-container">
        {
            this.state.blogs.map((c) => {
                if (c.id == id) {
                    return (
                        <div>
                            <img id="blog-image" src={c.image ? "https://s3.ap-south-1.amazonaws.com/business.strackit.com/"+c.image : EmptyBlogs} />
                            <StyledText>{c.title}</StyledText>
                            <div id="created-time">{c.timestamp}</div>
                            <div id="blog-description">{c.description}</div>
                            <br/><br/><br/>
                        </div>
                    )
                }
            })
        }
      </div>
    );
  }
}

export default Blogs;