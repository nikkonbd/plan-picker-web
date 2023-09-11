import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import EventPage from "./EventPage";
import ScheduleEventDetails from "../compnents/ScheduleEventDetails";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";



// describe("EventPage component", () => {
//   it("describes an individual test", () => {});
// })

// describe("EventPage component", () => {
// })

it("EventPage component test", () => {
  render(
    <MemoryRouter>
      <Provider store={store}>
        <EventPage />
      </Provider>
    </MemoryRouter>
  );
  const message = screen.queryByText(/Select Event Duration/i);
  expect(message).toBeVisible();
});

