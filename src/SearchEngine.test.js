import { render, screen, cleanup } from "@testing-library/react";
import SearchEngine from "./SearchEngine";

test("should render SearchEngine component", () => {
    render(<SearchEngine />);
    const searchEngineElement = screen.getByTestId("search-component");
    expect(searchEngineElement).toBeInTheDocument();
})