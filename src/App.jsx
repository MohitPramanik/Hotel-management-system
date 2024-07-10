import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { RoomProvider } from "./contexts/RoomContext";

function App() {
    return (
        <>
            <Navbar />
            <RoomProvider>
                <Outlet />
            </RoomProvider>
            <Footer />
        </>
    );
}

export default App;
