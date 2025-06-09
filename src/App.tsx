import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductPage />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          removeDelay: 1000,
          style: {
            background: "#fff",
            color: "#000",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            iconTheme: {
              primary: "green",
              secondary: "white",
            },
          },
        }}
      />
    </BrowserRouter>
  );
}
export default App;
