import './App.css';
import { Provider } from 'react-redux';
import createStore from './store';
import Header from './Components/Header';
import Categories from './Components/Categories';
import ActiveCategory from './Components/ActiveCategory';
import Footer from './Components/Footer';
import Box from '@mui/material/Box';

function App() {
  return (
    <Provider store={createStore()}>
      <div className="App">
        <Header />
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Categories />
          <ActiveCategory />
        </Box>
        <Footer />
      </div>
    </Provider>

  );
}

export default App;
