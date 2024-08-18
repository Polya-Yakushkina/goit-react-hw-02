import css from "./Options.module.css"
import clsx from "clsx";

export default function Options({ updateFeedback, totalFeedback, resetFeedback }) {
    return (
        <div className={clsx(css.container)}>
            <button onClick={() => updateFeedback("good")} className={clsx(css.button)}>Good</button>
            <button onClick={() => updateFeedback("neutral")} className={clsx(css.button)}>Neutral</button>
            <button onClick={() => updateFeedback("bad")} className={clsx(css.button)}>Bad</button>
            {totalFeedback > 0 && <button onClick={resetFeedback} className={clsx(css.button)}>Reset</button>}
        </div>
    );
}