import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import Navigator from "./components/Navigator";
import Home from "./pages/Home";
import "./styles/reset.css"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
