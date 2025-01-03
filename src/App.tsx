import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import Routes from '@/routes';

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Routes />
        </QueryClientProvider>
    );
};

export default App;
