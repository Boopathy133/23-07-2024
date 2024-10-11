import './App.css'
import ApolloProviderSetup from './ApolloProviderSetup';
import Banners from './Components/Banners';

function App() {

  return (
    <ApolloProviderSetup>
      <div>
        <h1>Shop Banners</h1>
        <Banners shopId={347} />
      </div>
    </ApolloProviderSetup>
  )
}

export default App
