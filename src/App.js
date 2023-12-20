import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes/Routes";
import Layout from "./components/Layout";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* array.map((currentValue, index, arr)=>{
                   return <Route key
                     {index} path={currentValue.path} element = {currentValue.element} />
                 }) */}
            {routes.map((currentValue, index, arr) => {
              return (
                <Route
                  key={index}
                  path={currentValue.path}
                  element={currentValue.element}
                />
              );
            })}
          </Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
