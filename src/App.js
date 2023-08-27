import React from "react";
import "./App.css";

import { QueryClient, QueryClientProvider } from "react-query";
import "./tailwind.css";

import { Provider } from "react-redux";
import store from "./statement-management/store";
import RoutesMain from "./routes";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RoutesMain />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;

//online course application
