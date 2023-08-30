import { Provider } from 'react-redux';
import { store } from './store/store';
import { Browser } from './routes/Browser';

const App = () => {
  return (
    <Provider store={store}>
      <Browser />
    </Provider>
  );
};

export default App;
