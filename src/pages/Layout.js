import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import styles from "../style/layout.module.css"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
function Layout() {
  let location = useLocation()
  const [banner, setBanner] = useState(true)
  useEffect(() => {

      setBanner(location.pathname)

  }, [location])
 
  return <>
        <div className={styles.wrapper}>
          <Navbar />
          <Outlet />
        </div>
        <div style={
              banner !== "/Contact" ? { display: "flex" } : { display: "none" }
            } className="wrapper" id="footer__space"></div>
        <Footer banner={banner}/>
      
  
  </>;
}

export default Layout;
