import { Provider } from 'react-redux';
import { store } from './store/store';
import { Browser } from './routes/Browser';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Flowbite } from 'flowbite-react';
import { pageTheme } from './theme/pageTheme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: true,
    },
  },
});

const App = () => {
  return (
    <Flowbite theme={{theme: pageTheme}}>
      <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Browser />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </Flowbite>
  );
};

export default App;
