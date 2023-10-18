import { useMemo, useState } from "react";
import "./Gallery.css";
import Paginator from "./Paginator";

type Props<T> = {
    data: T[];
    itemsPerPage: number;
};

const Gallery = <T extends { name: string }>(props: Props<T>) => {
    const { data, itemsPerPage } = props;

    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const itemsToDisplay: T[] = useMemo(() => {
        return data
            .filter((item) =>
                item.name
                    .toLowerCase()
                    .trim()
                    .includes(search.toLowerCase().trim())
            )
            .slice((page - 1) * itemsPerPage, page * itemsPerPage);
    }, [search, page, itemsPerPage, data]);

    const lastPossiblePage = useMemo(() => {
        return Math.ceil(data.length / itemsPerPage);
    }, [data, itemsPerPage]);

    return (
        <div className='body'>
            <h1>Gallery</h1>
            <input
                data-testid='search'
                type='text'
                placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className='gallery'>
                {itemsToDisplay.map((item) => (
                    <div className='item' key={item.name} data-testid='item'>
                        {item.name}
                    </div>
                ))}
            </div>

            <Paginator
                maxLimit={lastPossiblePage}
                page={page}
                setPage={setPage}
            />
        </div>
    );
};

export default Gallery;
