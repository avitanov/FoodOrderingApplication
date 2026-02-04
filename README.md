# Food Ordering App

Food Ordering App is a React-based web application for browsing restaurant menu categories, customizing meals, and placing orders with a persistent shopping cart. It provides a customer-facing interface for exploring menu categories (e.g., promotions and other categories), adding items to a cart, and proceeding to checkout, backed by Firebase for data storage.

The app also includes an authenticated admin dashboard, allowing logged-in staff to manage orders and menu items (viewing orders, adding/removing meals from categories, and deleting entries) through a protected area. Authentication is handled via a token-based system with automatic session expiration, while cart state is managed globally with React Context and reducers for a smooth, stateful user experience.

## Features

### Customer
- Browse restaurant menu categories (including promotions and other categories)
- View and customize meals
- Add/remove items in a persistent shopping cart
- Checkout flow for placing orders

### Admin Dashboard (Authenticated)
- Secure, protected admin area
- View/manage customer orders
- Add meals to categories
- Remove meals from categories
- Delete menu entries

### State & Authentication
- Token-based authentication
- Automatic session expiration
- Global cart state using React Context + reducers

## Tech Stack
- **Frontend:** React
- **Backend/Storage:** Firebase
- **State Management:** React Context + Reducers
- **Auth:** Token-based auth with session expiration
