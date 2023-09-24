import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.component";
import "./asset/styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import PageNotFound from "./pages/Notfound.component";
import Empty from "./components/EmptyProductdetail/empty.component";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

const App = () => {
  return (
    <Router>
      <Sidebar />
      <ErrorBoundary>
        <Suspense
          fallback={
            <div className=" text-center mt-2 ">در حال بارگزاری...</div>
          }
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/productList" element={<ProductList />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/product/*" element={<Empty />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
};

export default App;
