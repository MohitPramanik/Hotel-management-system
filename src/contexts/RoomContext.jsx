import { createContext, useEffect, useState } from "react";
import roomData from "../Data/room.js";

export const RoomContext = createContext(null);

export const RoomProvider = ({ children }) => {
    const [bookRoomsRecord, setBookRoomsRecord] = useState([]);
    const [rooms, setRooms] = useState(roomData);
    const [filters, setFilters] = useState({
        location: "",
        priceRange: "all",
        rating: "all",
    });

    useEffect(() => {
        if (filters.location !== "") {
            setRooms(
                roomData.filter(
                    (room) =>
                        room.location.toLowerCase() ===
                        filters.location.toLowerCase()
                )
            );
        } else {
            setRooms(roomData);
        }

        if (filters.priceRange !== "all") {
            setRooms(roomData.filter());
        }
    }, [filters]);

    return (
        <RoomContext.Provider
            value={{
                rooms,
                bookRoomsRecord,
                setBookRoomsRecord,
                filters,
                setFilters,
            }}
        >
            {children}
        </RoomContext.Provider>
    );
};
