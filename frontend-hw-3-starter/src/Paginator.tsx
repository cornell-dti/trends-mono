import "./Paginator.css";
import { ChevronUpCircle, ChevronDownCircle } from "lucide-react";

/**
 * Hey there! Welcome to Homework 3!
 *
 * This is the file you'll be editing for this homework.
 * Your goal is to develop a paginator component.
 * It will keep track of what page a user is on (say, in an e-book),
 * and then allow them to go to the next or previous page.
 *
 * Note that you are passed a set of props,
 * which are the minimum and maximum page numbers you can go to.
 * The exact details of the type Props are given below.
 *
 * For example, say props.minLimit is 1 and props.maxLimit is 10.
 * If the user is on page 1 and clicks the down arrow, nothing should happen.
 * If the user is on page 10 and clicks the up arrow, nothing should happen.
 *
 * This should constrain your behavior accordingly!
 *
 * In the <h2>, you should display the current page number.
 * When the user clicks on the up arrow, the current page number should increase by 1.
 * When the user clicks on the down arrow, the current page number should decrease by 1.
 * When the component first loads, the current page number should default to 1 if no minLimit was provided, and the minLimit if it was provided.
 *
 * To get started, run
 * `pnpm install`
 * `pnpm dev`
 * You should then be able to test the component at http://localhost:5173/
 *
 * For grading purposes, do not remove any of the provided code, especially any 'data-testid' attributes.
 * Instead, add new code as needed!
 *
 * Good luck! Let us know if you have any questions or concerns on Ed.
 */

type Props = {
    minLimit?: number; // The minimum page number you can go to. You should assume it is 1 if not provided.
    maxLimit: number; // The maximum page number you can go to. You can assume it is at least 1.
};

const Paginator = (props: Props) => {
    // Put reactive logic here!

    return (
        <>
            <h1>HW3</h1>
            <div className='row'>
                {/* Modify this button so that it increments the page you're on! */}
                <button data-testid='incrementpage'>
                    <ChevronUpCircle size={64} />
                </button>
                <h2 data-testid='pagenumber' className='pagenumber'>
                    {/* Display the page number you're currently on here! */}
                </h2>
                {/* Modify this button so that it decrements the page you're on! */}
                <button data-testid='decrementpage'>
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
