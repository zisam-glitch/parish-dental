import { Button } from "@material-tailwind/react";
import React from "react";
import { BsFillCalendar2DateFill } from "react-icons/bs";

const BookingButton = ({ children }) => {
  return (
    <a
      className="flex items-center"
      href="/shop"
      rel="noreferrer"
    >
      <Button className="flex items-center bg-secondary">
        {children ? children : "Shop"}
      </Button>
    </a>
  );
};

export default BookingButton;
