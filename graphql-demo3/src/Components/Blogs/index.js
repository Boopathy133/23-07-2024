import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import client from '../../ApolloClient';
import { gql, useQuery } from "@apollo/client";
import { Grid } from "semantic-ui-react";
import BlogCard from './BlogCard';
import GlobalContext from "../../GlobalContext"

const StyledText = styled.div`
  font-family: "Raleway", sans-serif;
  text-transform: capitalize;
  font-weight: 600;
  font-size: 34px;
  color: #000000;
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

const Blogs = ({ count, shopId }) => {
  const [blogs, setBlogs] = useState()
  const context = useContext(GlobalContext);
  const { loading: getBlogDataLoading, error: getBlogDataError, data: getBlogDataData, refetch: getBlogDataRefetch } = useQuery(getBlogs, {
    variables: {
      "filter": {
        shopId: context?.shopId,
      }
    },
  });


  useEffect(() => {
    if (context?.shopId) {
      if (getBlogDataData) {
        setBlogs(getBlogDataData.Blog.slice(0, count))
      }
    }
  }, [context?.shopId, getBlogDataData])

  // getBlogs = async () => {
  //   this.setState({ loading: true })
  //   try {
  //     const { data } = await client.query({
  //       query: getBlogs,
  //       variables: {
  //         filter: {
  //           shopId: 347,
  //         },
  //       },
  //     });
  //     this.setState({ blogs: data.Blog.slice(0, this.props.count), loading: false });
  //   } catch (error) {
  //     console.error("Error:", error);
  //     this.setState({ loading: false });
  //   }
  // };

  return (
    <React.Fragment >{blogs?.length > 0 ? <div id="popular-products-container">

      <center><StyledText>Our Blogs</StyledText></center>
      <Grid style={{ marginTop: "2%" }}>
        {
          blogs?.map((c) => {
            return (
              <BlogCard item={c} />
            )
          })
        }
      </Grid>
    </div> : 
    <div>
    {
      count == 3 ? null : 
      <center>
        <h3>- No Blogs -</h3>
      </center>
    }
    </div>
    }</React.Fragment>
  );
}

export default Blogs;