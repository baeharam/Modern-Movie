import { QueryClient, QueryClientProvider } from "react-query";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import "./styles/reset.css"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
      <Home />
    </QueryClientProvider>
  )
}

export default App
