import { Route, Routes } from "react-router-dom";
import { Subscribe } from "./Pages/Subscribe";
import { Event } from "./Pages/Event";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
