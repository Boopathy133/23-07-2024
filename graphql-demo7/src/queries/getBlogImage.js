import { gql } from '@apollo/client';

const GET_BLOG_IMAGE = gql`
  query Blog($filter: blogFilter) {
  Blog(filter: $filter) {
    image
    timestamp
  }
}
`;

export default GET_BLOG_IMAGE;
