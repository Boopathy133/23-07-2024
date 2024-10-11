import React from 'react'
import ApolloProviderSetup from './ApolloProviderSetup'
import Banners from './Banners'

const App = () => {
  return (
    <ApolloProviderSetup>
      <div>
        <h1>Blog Image</h1>
        <Banners shopId={347}/>
      </div>
    </ApolloProviderSetup>
  )
}

export default App