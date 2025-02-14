Dessert Shop Shopping Cart is a modern, fully responsive e-commerce web application built using React, designed to provide users with an engaging and seamless dessert shopping experience. The application allows users to browse a variety of dessert products, add them to their shopping cart, and view the real-time total cost, including taxes and subtotal calculations.

Key Features:
Dynamic Product Display: The products are displayed as responsive, hover-enabled cards that adapt to different screen sizes, allowing for an optimized experience on both mobile and desktop devices.
Interactive Cart System: The shopping cart is accessible via a floating button and can be toggled open and closed for user convenience. The cart shows a list of added items, including product names, quantities, prices, and a breakdown of subtotal, taxes, and total.
Real-time Cart Calculation: As items are added or removed, the cart automatically updates, recalculating the number of items, subtotal, tax, and final total.
Responsive Design: Built with Tailwind CSS and custom media queries, the layout is fully responsive, ensuring a seamless shopping experience across different devices (desktops, tablets, and smartphones).
Apple-Inspired UI: The design follows Apple's minimalist design principles with smooth transitions, soft gradients, and sleek typography, offering an intuitive and visually appealing interface.
Technical Details:
Frontend: Developed using React, leveraging Hooks and State Management to handle cart operations (adding/removing items) and UI state changes dynamically. Components like the dessert cards and cart modal are created as reusable and modular React components for easy maintainability.
Styling: The design is crafted using Tailwind CSS, allowing for a flexible and responsive layout with utility-first classes. Additionally, custom CSS is used to implement hover effects, transitions, and shadows that contribute to the smooth user experience.
Event Handling: All interactions, including adding products to the cart, clearing the cart, and toggling the cart visibility, are handled through React's event system with concise functions, ensuring minimal performance overhead.
State Management: React’s useState and useEffect hooks are used to manage the application state, including the cart contents, product list, and the visibility of the cart modal.
Cart Functionality: The cart logic is encapsulated in a ShoppingCart class that tracks the items, calculates the subtotal, taxes, and total, and updates the cart display accordingly. The cart supports the addition of multiple quantities of a product, with a feature to clear all items at once.
Tax Calculation: A fixed tax rate is applied to the subtotal to calculate the total amount in the cart, providing an accurate and up-to-date view of the costs.
Responsive Layout: The layout is responsive to screen size changes using CSS media queries. At larger screen widths, the dessert cards appear in multiple columns, while at smaller screen sizes, the cards adjust to a single-column layout for easy mobile browsing.
This project serves as an excellent demonstration of using React and modern web design principles to create a polished, user-friendly shopping cart system. Whether for an e-commerce website or a dessert shop, the application provides all the necessary functionality with a focus on user experience and design aesthetics.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
