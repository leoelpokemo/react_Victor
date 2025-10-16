import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { useState } from 'react';
import { AppContext } from "./components/AppContext/AppContext";
import "./App.css";
import CopyRight from "./components/Main/components/Row/CopyRight";

function App() {
  const [companyName, setCompanyName] = useState("Rowan Networks");
  const [copyRight, setCopyRight] = useState("2024 - All rights reserved");
  return (
    <AppContext.Provider value={{ copyRight, setCopyRight }}>
      <Header companyName={companyName} />
      <Main />
      <Footer companyName={companyName} setCompanyName={setCompanyName} />
      <CopyRight />
    </AppContext.Provider>
  );
}

export default App;
