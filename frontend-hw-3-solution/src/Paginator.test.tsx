import { describe, test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Paginator from "./Paginator";

describe("Paginator Component", () => {
    test("increments page number when clicking increment", () => {
        const { getByTestId } = render(<Paginator maxLimit={10} />);
        const incrementButton = getByTestId("incrementpage");
        const pageNumber = getByTestId("pagenumber");
        fireEvent.click(incrementButton);
        expect(pageNumber.textContent).toBe("2");
    });

    test("decrements page number when clicking decrement", () => {
        const { getByTestId } = render(<Paginator maxLimit={10} />);
        const decrementButton = getByTestId("decrementpage");
        const pageNumber = getByTestId("pagenumber");
        fireEvent.click(decrementButton);
        fireEvent.click(decrementButton);
        expect(pageNumber.textContent).toBe("1");
    });

    test("does not increment beyond maxLimit", () => {
        const { getByTestId } = render(<Paginator maxLimit={1} />);
        const incrementButton = getByTestId("incrementpage");
        const pageNumber = getByTestId("pagenumber");
        fireEvent.click(incrementButton);
        expect(pageNumber.textContent).toBe("1");
    });

    test("does not decrement below minLimit", () => {
        const { getByTestId } = render(
            <Paginator minLimit={1} maxLimit={10} />
        );
        const decrementButton = getByTestId("decrementpage");
        const pageNumber = getByTestId("pagenumber");
        fireEvent.click(decrementButton);
        expect(pageNumber.textContent).toBe("1");
    });

    test("does not increment or decrement when maxLimit equals minLimit", () => {
        const { getByTestId } = render(<Paginator minLimit={1} maxLimit={1} />);
        const incrementButton = getByTestId("incrementpage");
        const decrementButton = getByTestId("decrementpage");
        const pageNumber = getByTestId("pagenumber");
        fireEvent.click(incrementButton);
        fireEvent.click(decrementButton);
        expect(pageNumber.textContent).toBe("1");
    });

    test("works appropriately when minLimit is not provided", () => {
        const { getByTestId } = render(<Paginator maxLimit={10} />);
        const decrementButton = getByTestId("decrementpage");
        const pageNumber = getByTestId("pagenumber");
        fireEvent.click(decrementButton);
        expect(pageNumber.textContent).toBe("1");
    });
});
