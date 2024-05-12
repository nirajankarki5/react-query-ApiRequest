import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersList from "./pages/UsersList";
import PostsList from "./pages/PostsList";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime is time till the data is invalidated. Once data is invalidated, it refetches the data
      staleTime: 60 * 1000, // milliseconds
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <nav className="navbar">
          <h1 className="heading">Welcome!!!</h1>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<UsersList />} />
            <Route path="/users/:userId/posts" element={<PostsList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
