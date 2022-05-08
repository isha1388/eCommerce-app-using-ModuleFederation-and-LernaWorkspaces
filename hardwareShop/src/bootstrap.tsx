import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from "react-query";
// import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const client = new QueryClient();
root.render(
  // <React.StrictMode>
  <QueryClientProvider client={client}>
    {/* <Router history={history}> */}
      <App />
      {/* <Switch> */}
        {/* <Route path='/' component={App} /> */}
      {/* </Switch> */}
    {/* </Router> */}
  </QueryClientProvider>
  // </React.StrictMode>
);
