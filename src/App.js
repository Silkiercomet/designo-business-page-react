import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Location from "./pages/Location";
import ShowProjects from "./pages/ShowProjects";
import DesignPagesContent from "./designPagesContent";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Company" element={<Company />} />
            <Route
              path="AppDesign"
              element={<ShowProjects {...DesignPagesContent[1]} />}
            />
            <Route path="Contact" element={<Contact />} />
            <Route
              path="WebDesign"
              element={<ShowProjects {...DesignPagesContent[0]} />}
            />
            <Route
              path="GraphDesign"
              element={<ShowProjects {...DesignPagesContent[2]} />}
            />

            <Route path="Location" element={<Location />} />
          </Route>
            <Route path="*" element={<h1>not found 404</h1>} />
        </Routes>
      </ScrollToTop>
  );
}

export default App;
