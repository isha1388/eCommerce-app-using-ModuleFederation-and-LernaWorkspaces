import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { Router } from "react-router-dom";
// import { createBrowserHistory } from "history";

// const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.provider context={shared}>
    <App />
  // </React.provider>
);
// root.render(
//    <React.StrictMode>
//     <Router>
//       <App />
//       <Switch>
//         <Route path='/' component={App} />
//       </Switch>
//     </Router>
//    </React.StrictMode>
// );
