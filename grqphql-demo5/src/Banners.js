import { gql, useQuery } from '@apollo/client'
import React from 'react'


const GET_BANNERS = gql`
query Blog($filter: blogFilter) {
  Blog(filter: $filter) {
    image
    timestamp
    description
  }
}
`;



const Banners = ({shop}) => {
    const {loading, data, error} = useQuery(GET_BANNERS,{
        variables: {filter : {shopId}},
    });
    if (loading) return <p>Loading ...</p>;
    if (error) return <p>Error : {error.message}</p>;
  return (
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
        {data.Blog.map((Blog, index) =>(
            <img
                key={index}
                src={Blog.image}
                alt={`Blog ${index+1}`}
                style={{width: '200px',height: 'auto'}} />
        ))}
    </div>
  )
}

export default Banners