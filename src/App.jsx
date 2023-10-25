import { Provider } from 'react-redux';
import { store } from './store/store';
import { Browser } from './routes/Browser';
import { register } from "swiper/element/bundle";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Flowbite } from 'flowbite-react';
import { pageTheme } from './theme/pageTheme';
import { ToastContainer } from 'react-toastify';
import { SaleProvider } from './context/SaleContext';
import { ErrorBoundary } from './pages/error/ErrorBoundary';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: true,
    },
  },
});

const App = () => {
  register();
  return (
    <ErrorBoundary>
      <Flowbite theme={{ theme: pageTheme }}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <SaleProvider>
              <Browser />
              <ToastContainer />
            </SaleProvider>
          </Provider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Flowbite>
    </ErrorBoundary>
  );
};

export default App;
