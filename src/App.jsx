import HomePage from "./routes/homepage/homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./routes/layout/layout";
import AboutUs from "./routes/aboutus/aboutus";
import OurWork from "./routes/ourwork/ourwork";
import Services from "./routes/services/services";
import Careers from "./routes/careers/careers";
import ContactUs from "./routes/contactus/contactus";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/ourwork",
          element: <OurWork />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/careers",
          element: <Careers />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
