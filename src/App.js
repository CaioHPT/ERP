import { Provider } from "react-redux";
import './App.css';
import Aside from './components/Aside';
import AccountProvider from './context/Account';

import Home from './pages/Home';
import Cliente from "./components/Cliente"

import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import store from "./store"
import { Routes, Route } from "react-router-dom"

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

function App() {
  return (
    <>
      <AccountProvider>
        <div className='App'>
          <Provider store={store}>
            <Aside />
            <Box sx={{ flexGrow: 1, p: 3 }}>
              <DrawerHeader />
                <Routes>
                  <Route element={ <Home/> } path="/"></Route>
                  <Route element={ <Cliente/> } path="/Clientes"></Route>
                  <Route element={""} path=""></Route>
                  <Route element={""} path=""></Route>
                  <Route element={""} path=""></Route>
                  <Route element={""} path=""></Route>
              </Routes>
            </Box>
          </Provider>
        </div>
      </AccountProvider>
    </>
  );
}

export default App;