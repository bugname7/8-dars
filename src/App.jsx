import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import PlayList from "./pages/PlayList";
import Likes from "./pages/Likes";

function App() {
  return (
    <div>
      <Routes>
        <Route
          index
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <MainLayout>
              <PlayList />
            </MainLayout>
          }
        />
        <Route
          path="/likes"
          element={
            <MainLayout>
              <Likes />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
