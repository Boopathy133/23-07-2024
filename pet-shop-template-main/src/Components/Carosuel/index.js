import React, { useRef, useState, useContext, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import GlobalContext from "../../GlobalContext";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiOutlineCaretRight } from "react-icons/ai";
import { IoMdArrowDropleft } from "react-icons/io";
import "../../Assets/CSS/carosel.css";

const GET_CAROUSEL = gql`
  query Banners($filter: bannerFilterInput) {
    banners(filter: $filter) {
      id
      shop_id
      title
      image
      priority
      addedon
      link
    }
  }
`;

export const CarosuelImage = () => {
  const context = useContext(GlobalContext);
  const carouselRef = useRef(null);
  const [banners, setBanners] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const {
    loading: getCarouselLoading,
    error: getCarouselError,
    data: getCarouselData,
    refetch: getCarouselRefetch,
  } = useQuery(GET_CAROUSEL, {
    variables: {
      filter: {
        shopId: 347,
      },
    },
  });

  useEffect(() => {
    if (getCarouselData) {
      setBanners(getCarouselData.banners);
    }
  }, [getCarouselData]);

  return (
    <div>
      <Carousel
        onChange={(index) => setSelectedIndex(index)}
        showThumbs={false}
        showStatus={false}
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={4000}
        transitionTime={1000}
        ref={carouselRef}
      >
        {banners.map((item) => {
          let url = item.image
            ? "https://s3.ap-south-1.amazonaws.com/business.strackit.com/" +
              item.image
            : null;
          return (
            <div>
              <img src={url} className="carosel-image"></img>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
