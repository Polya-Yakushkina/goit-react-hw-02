import clsx from "clsx";
import css from "./Feedback.module.css";

export default function Feedback({ feedback, totalFeedback, positiveFeedback }) {
    return (
        <div className={clsx(css.container)}>
            <p className={clsx(css.text)}>Good: {feedback["good"]}</p>
            <p className={clsx(css.text)}>Neutral: {feedback["neutral"]}</p>
            <p className={clsx(css.text)}>Bad: {feedback["bad"]}</p>
            <p className={clsx(css.text)}>Total: {totalFeedback}</p>
            <p className={clsx(css.text)}>Positive: {positiveFeedback}%</p>
        </div>
    )
}