import { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import AddressSearch from './containers/AddressSearch';

const queryClient = new QueryClient();

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AddressSearch />
    </QueryClientProvider>
  );
};

export default App;
