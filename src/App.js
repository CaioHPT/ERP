import './App.css';
import Aside from './components/Aside';
import AccountProvider from './context/Account';
import { Provider } from "react-redux";
import store from "./store"

function App() {
  return (
    <>
      <AccountProvider>
        <div className='App'>
          <Provider store={store}>
            <Aside/>
          </Provider>
        </div>
      </AccountProvider>
    </>
  );
}

export default App;
