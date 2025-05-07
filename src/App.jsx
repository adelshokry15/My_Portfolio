import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import LayOut from "./Components/LayOut/LayOut";

function App() {
  let routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ]);

  return (
    <BrowserRouter basename="/My_Portfolio">
      <RouterProvider router={routes}></RouterProvider>
    </BrowserRouter>
  );
}

export default App;
