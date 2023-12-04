import React from "react";
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
//Frontend
//Api folder all
//env file wise
//Lazy Loading
//Add Loader in every page
//BreadCamp
//Submit button loader
//Notification
//Animation
//Authentication with redux persistor and make user type,token global
//Website manage API frontend intrigation

//Backend
//Pagination based list data fetch
//Filter based data fatch
//Search
//Forgot Passord
//Google Signin and Signup
//Website manage API have to complete

