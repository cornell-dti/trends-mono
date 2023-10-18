import { useState } from "react";
import "./Paginator.css";
import { ChevronUpCircle, ChevronDownCircle } from "lucide-react";

// EXAMPLE SOLUTION

type Props = {
    minLimit?: number; // The minimum page number you can go to. You should assume it is 1 if not provided.
    maxLimit: number; // The maximum page number you can go to. You can assume it is at least 1.
};

const Paginator = (props: Props) => {
    const minLimit = props.minLimit ?? 1;
    const maxLimit = props.maxLimit;

    const [page, setPage] = useState(minLimit);

    const handleIncrement = () => {
        if (page < maxLimit) {
            setPage(page + 1);
        }
    };

    const handleDecrement = () => {
        if (page > minLimit) {
            setPage(page - 1);
        }
    };

    return (
        <>
            <h1>HW3</h1>
            <div className='row'>
                <button data-testid='incrementpage' onClick={handleIncrement}>
                    <ChevronUpCircle size={64} />
                </button>
                <h2 data-testid='pagenumber' className='pagenumber'>
                    {page}
                </h2>
                <button data-testid='decrementpage' onClick={handleDecrement}>
                    <ChevronDownCircle size={64} />
                </button>
            </div>
            <p className='read-the-docs'>
                Edit <code>src/Paginator.tsx</code> to get started!
            </p>
        </>
    );
};

export default Paginator;
