import { describe, test, expect } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import Gallery from "../src/components/Gallery";

describe("Gallery Component", () => {
    test("renders max items per page, no search", () => {
        const data = [
            { name: "item1" },
            { name: "item2" },
            { name: "item3" },
            { name: "item4" },
            { name: "item5" },
            { name: "item6" },
            { name: "item7" },
        ];
        const { getAllByTestId } = render(
            <Gallery data={data} itemsPerPage={5} />
        );
        const items = getAllByTestId("item");
        expect(items.length).toBe(5);
    });

    test("renders only items that match search", () => {
        const data = [
            { name: "found1" },
            { name: "found2" },
            { name: "item3" },
            { name: "item4" },
            { name: "item5" },
        ];
        const { getAllByTestId, getByTestId } = render(
            <Gallery data={data} itemsPerPage={5} />
        );
        const searchInput = getByTestId("search");
        fireEvent.change(searchInput, { target: { value: "found" } });
        const items = getAllByTestId("item");
        expect(items.length).toBe(2);
    });

    test("renders only items that match search and are on the current page", () => {
        const data = [
            { name: "found1" },
            { name: "found2" },
            { name: "found3" },
            { name: "found4" },
            { name: "item5" },
        ];
        const { getAllByTestId, getByTestId } = render(
            <Gallery data={data} itemsPerPage={2} />
        );
        const searchInput = getByTestId("search");
        fireEvent.change(searchInput, { target: { value: "found" } });
        const incrementButton = getByTestId("incrementpage");
        fireEvent.click(incrementButton);
        const items = getAllByTestId("item");
        expect(items.length).toBe(2);
        expect(items[0].textContent).toBe("found3");
        expect(items[1].textContent).toBe("found4");
    });
});
