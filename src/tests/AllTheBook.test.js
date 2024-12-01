import React from "react";
import { render, screen } from "@testing-library/react";
import AllTheBooks from "../AllTheBooks/AllTheBooks.Component";
import historylist from "../../books/history.json";

test("renders the correct number of books by titles", () => {
  render(<AllTheBooks booklist={historylist} />);
  historylist.forEach((book) => {
    const bookTitle = screen.getByText(book.title);
    expect(bookTitle).toBeInTheDocument();
  });
});
