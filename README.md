Here, I have implemented a basic e-Commerce application using Module Federation.

Key features:
- A Container host application 'hardwareShop' calling two Micro Frontends 'products' and 'cart' using webpack 5 Module Federation.
- Used Lerna Workspaces for the mono-repo Architecture.
- Used Material-UI for the UI components.

Container: hardwareShop:
- Lazy-loads the products and cart MFEs.

MFE: products:
- On page-load, limited products will render from the paginated API and then on scroll, calls for next page will get hit on run time using Infinite-Scroll.
- Search functionality implemented on hitting Enter. 

Libs:
- Created an abstract sdk package to contain axios wrapper and typescript Model.
- ui-components package containing material-ui components which can be used across the MFEs.

Another components created to note:
- useFetch custom hook.
- kebab menu.
#### How to run:

- git clone https://github.com/isha1388/ModuleFederation-Example-Using-React.git
yarn
lerna bootstrap
yarn start
yarn start-server

As the beauty of MFEs is, there will be 3 apps hosted independently:
products: http://localhost:3001/
cart: http://localhost:3002/
Main Container App: http://localhost:3000/


TO-DO:
- Implement react-routing to give user-id in the home-route so that it can be accessible from all the MFEs.
- Adding the product to cart from the products MFE so that it reflects on the cart MFE.
- Reading the role of the user and updating the kebab-menu actions.