import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_BANNERS = gql`
query Banners($filter: bannerFilterInput) {
  banners(filter: $filter) {
    image
  }
}
`;

const Banners = ({ shopId }) =>{
    const { data } = useQuery(GET_BANNERS,{
        variables : { filter : {shopId}},
    });

    return (
        <div>
            {data.banners.map((banner, index) => (
                <img key={index} src="{banner.iamge" />
            ))}
        </div>
    );
};

export default Banners;