import { gql } from "@apollo/client";


export const GET_BANNERS = gql`
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