import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Rooms from "./pages/Rooms.jsx";
import Booking from "./pages/Booking.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="bookings" element={<Booking />} />
            <Route path="profile" element={<Profile />} />
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
