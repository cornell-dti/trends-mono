import { ChevronUpCircle, ChevronDownCircle } from "lucide-react";

type Props = {
    minLimit?: number;
    maxLimit: number;

    page: number;
    setPage: (page: number) => void;
};

const Paginator = (props: Props) => {
    const { minLimit, maxLimit, page, setPage } = {
        ...props,
        minLimit: props.minLimit ?? 1,
    };

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
        <div className='row'>
            <button data-testid='decrementpage' onClick={handleDecrement}>
                <ChevronDownCircle size={64} />
            </button>
            <h2 data-testid='pagenumber' className='pagenumber'>
                {page}
            </h2>
            <button data-testid='incrementpage' onClick={handleIncrement}>
                <ChevronUpCircle size={64} />
            </button>
        </div>
    );
};

export default Paginator;
