import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import Home from './pages/home/home';
import PropTypes from 'prop-types';

const App = ({store}) => {
  return (
    <Provider store={store}>
      <Home></Home>  
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired
}

export default App;
