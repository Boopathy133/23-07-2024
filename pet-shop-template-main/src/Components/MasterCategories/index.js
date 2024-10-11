import React, { useContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import GlobalContext from "../../GlobalContext";
import { Link } from "react-router-dom";

const GET_MASTER_CATEGORIES = gql`
query MasterCategories($filter: MasterCategoryInput) {
    masterCategories(filter: $filter) {
      shopId
      category
      image
      id
      position
      status
      addedon
    }
  }
`;

export const MasterProduct = () => {
  let demo = "https://cdn.pixabay.com/photo/2021/10/11/23/49/app-6702045_640.png"
  const context = useContext(GlobalContext);
  const [masterCategory, setMasterCategory] = useState([])
  const { loading: getMasterCategoriesLoading, error: getMasterCategoriesError, data: getMasterCategoriesData, refetch: getMasterCategoriesRefetch } = useQuery(GET_MASTER_CATEGORIES, {
    variables: {
      "filter": {
        "shopId": 347,
      }
    },
  });

  useEffect(() => {
    if (getMasterCategoriesData) {
      setMasterCategory(getMasterCategoriesData.masterCategories)
    }
  }, [getMasterCategoriesData])
  return (
    <div className="master-container">
      {Array.isArray(masterCategory) && masterCategory.map((item) => {
        return (
          <Link to={`/${item.category}`} style={{ width: "100%" }} >
            <div className="mastercat-card">
              <div className={item?.image ? "master-category-name" : "master-category-name1"} >{item.category}</div>
              {/* <div className="shop-button">Shop Now</div> */}
              {item?.image ? <img style={{ width: "100%",height:"100%" }} src={"https://s3.ap-south-1.amazonaws.com/business.strackit.com/" + item.image} /> :
                <div style={{height:"15rem",width:"20rem"}}></div>}
              <div class="image-overlay"></div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}