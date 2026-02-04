import React, { useContext, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthContext from "./dataStorage/Auth-context";
import CartProvider from "./dataStorage/CartProvider";
// import Main from "./pages/MainPage";
// import Cart from "./pages/Cart";
// import NotFound from "./pages/NotFound";
// import Dashboard from "./pages/Dashboard";
// import OrdersList from "./components/Dashboard/OrdersList";
// import AuthForm from "./components/Auth/AuthForm";
// import MenuItemsDash from "./components/Dashboard/MenuItemsDash";
import LoadingSpinner from "./components/UI/LoadingSpinner";
function App() {
  const authCtx = useContext(AuthContext);
  const Cart = React.lazy(() => import("./pages/Cart"));
  const NotFound = React.lazy(() => import("./pages/NotFound"));
  const AuthForm = React.lazy(() => import("./components/Auth/AuthForm"));
  const OrdersList = React.lazy(() => import("./components/Dashboard/OrdersList"));
  const MenuItemsDash = React.lazy(() => import("./components/Dashboard/MenuItemsDash"));
  const Dashboard = React.lazy(() => import("./pages/Dashboard"));
  const Main = React.lazy(() => import("./pages/MainPage"));
  
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Suspense fallback={<div className="w-full h-screen pt-[20%]">
            <LoadingSpinner/>
            </div>}>
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/categories/promotions" />}
              />
              <Route path="/categories" element={<Main />}>
                <Route path="/categories/:categoryId" element={<Main />} />
              </Route>
              <Route path="/cart" element={<Cart />}>
                <Route path="/cart/check-out" element={<Cart />}></Route>
              </Route>
              <Route
                path="/dashboard"
                element={
                  authCtx.isLoggedIn ? (
                    <Navigate to="/dashboard/orders" />
                  ) : (
                    <AuthForm />
                  )
                }
              />
              <Route
                path="/dashboard/orders"
                element={
                  authCtx.isLoggedIn ? (
                    <Dashboard>
                      <OrdersList />
                    </Dashboard>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route
                path="/dashboard/menuItems"
                element={
                  authCtx.isLoggedIn ? (
                    <Dashboard>
                      <MenuItemsDash />
                    </Dashboard>
                  ) : (
                    <Navigate to="/dashboard" />
                  )
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
