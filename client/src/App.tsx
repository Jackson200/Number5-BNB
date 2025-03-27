import { Route, Switch } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Breakfast from "./pages/Breakfast";
import NW200 from "./pages/NW200";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import NotFound from "./pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/breakfast" component={Breakfast} />
          <Route path="/nw200" component={NW200} />
          <Route path="/attractions" component={Attractions} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
