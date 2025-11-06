import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import api from "./dataprovider/api";
import { useEffect, useState, createContext } from 'react';


export const AppContext = createContext();

function App() {

  console.log("Aesto es por que ya se monto el componente!");

  useEffect(() => {
    (async () => {
      await api.getallcards()
        .then((data) => {
          setcards(data); // esto almacena los datos de la carta
        })
        .catch((error) => {
          console.error("Error fetching cards data:", error);
        });
    })();
  }, []);
}