# Sales-React

Sales-React is a minimalist e-commerce website built with React and vanilla CSS. The website features a modern and intuitive design, with easy-to-use navigation and a simple shopping experience that puts the focus on the products.

👉 Live Demo: [Sales-React Demo](https://benjaminlobl.github.io/Sales-React/)

## Built With

- Vanilla CSS
- React JS
- 
## Technical Overview

Sales-React is built using React JS, which allows for a fast and efficient user experience by minimizing page reloads through the use of reusable components and state management.

The CSS in this project is written in vanilla CSS, which keeps the project lightweight and easy to maintain. The responsive design ensures that the website looks great on both desktop and mobile devices.

The shopping cart functionality is implemented using React context and local storage. This approach allows users to add, remove, and update products in their cart while persisting their selections between sessions.

## Screenshots of the Project 📸

### Home Page 

![Home Page](https://user-images.githubusercontent.com/126472407/235343567-a9a0756a-de17-4a1a-b53a-ecd18e32a79d.png)


The Home page welcomes users and showcases featured products. Users can navigate to the Categories page or select a specific category from the navigation bar.

### Categories Page 

![Categories Page](https://user-images.githubusercontent.com/126472407/235343589-070caf9d-92ad-493d-aec1-a6f3c5c843f4.png)

The Categories page displays all available product categories, including T-Shirts, Sweaters, Hoodies, and Accessories. Users can click on a category to view its products.

### Product Page

![Product Page](https://user-images.githubusercontent.com/126472407/235343605-291f732a-2376-4a11-8777-4d4c3304a114.png)

The Product page displays detailed information about a specific product, including images, a description, available sizes, and the option to add the item to the cart.

### Shopping Cart

![Shopping Cart](https://user-images.githubusercontent.com/126472407/235343624-07aae9ed-f2fe-4ede-a041-06b1b9caca2e.png)

The Shopping Cart page allows users to review their selected items, adjust quantities, remove products, and proceed to checkout.


## Installation and Running the App

To run Sales-React locally, follow these steps:

1. Clone the repository: `git clone https://github.com/BenjaminLobl/Sales-React.git`
2. Change to the project directory: `cd Sales-React`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

"predeploy": "npm run build",
"deploy": "gh-pages -d build"
