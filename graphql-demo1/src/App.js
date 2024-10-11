
import './App.css';
import USER_QUERY from './query';

function App() {
  const {data, loading, error} =useQuery(USER_QUERY)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error</div>
  }
  return (
    <div className="App">
      <h3>GraphQL Intergretation</h3>
      {
        data?.address.map((address)=> <div>
          <h5>ID: {address.id}</h5>
          <h5>NAME: {address.name}</h5>
          <h5>PHONE NUMBER: {address.phone}</h5>
          <h5>PINCODE{address.pincode}</h5>
          <h5>STATUS :{address.status}</h5>
          <h5>STATE: {address.state}</h5>
          <h5>STREET: {address.street}</h5>
          <h5>USER ID: {address.userId}</h5>
          <h5>TYPE: {address.type}</h5>
          <h5>CITY: {address.city}</h5>
          <h5>COUNTRY: {address.country}</h5>
        </div>)
      }
    </div>
  );
}

export default App;
