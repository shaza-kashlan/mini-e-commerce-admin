import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";

function App() {
  const [isImageClicked, setIsImageClicked] = useState(false);

  const onSidebarToggle = () => {
    console.log("image clicked");
    setIsImageClicked(!isImageClicked);
  };

  return (
    <>
      <Navbar onSidebarToggle={onSidebarToggle} />
      {isImageClicked && <Sidebar />}
      <Footer />
    </>
  );
}

export default App;
