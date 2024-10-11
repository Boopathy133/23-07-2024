import { gql } from "@apollo/client";
const USER_QUERY = gql`{
    query Address {
        address {
          id
          name
          phone
          pincode
          status
          state
          street
          userId
          type
          city
          country
        }
      }
`;
export default USER_QUERY