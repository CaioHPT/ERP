import './App.css';
import Aside from './components/Aside';
import AccountProvider from './context/Account';
function App() {
  return (
    <>
      <AccountProvider>
        <div className='App'>
          <Aside />
        </div>
      </AccountProvider>
    </>
  );
}

export default App;
