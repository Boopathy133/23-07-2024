import { useQuery } from '@apollo/client'
import React from 'react'
import { GET_BANNERS } from '../queries'



const Banners = ({ filter }) => {
    const { loading, error, data } = useQuery(GET_BANNERS, {
        variables: { filter },
    });
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>;
    return (
        // <div>
        //     {data.banners.map((banner, title, index) => (
        //         <><img key={index} src={banner.image} alt={`Banner ${index}`} /><h5>Title: {banner.title}</h5></>
        //     ))
        //     }
        // </div>
        <div>
            
        </div>
    );
};

export default Banners