import './App.css'
import { Cat } from './Cat';
import { Count } from './Count';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {

  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }})

  return (
    <div className='App'>
      <QueryClientProvider client={client}>
        <Cat/>
        <Count/>
      </QueryClientProvider>
    </div>
  ) 
}

export default App;
