
import './App.css';
import { ApolloProvider } from '@apollo/client';
import client from './ApolloClient';
import Banners from './Components/Banners';
import Navbar from './Components/Navbar/Navbar'
import Blogs from './Components/Blogs/index'

function App() {
  const filter = {
    shopId: 347
  };
  return (
    <>
    <Blogs />
    {/* <Navbar />
    <ApolloProvider client={client}>
      <div className='App'>
        <h1>Banners</h1>
        <Banners filter={filter} />
      </div>
    </ApolloProvider> */}
    </>
  );
}

export default App;
