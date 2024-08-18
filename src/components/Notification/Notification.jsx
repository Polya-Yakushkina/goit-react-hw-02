import css from "./Notification.module.css"
import clsx from "clsx";

export default function Notification() {
    return (
        <p className={clsx(css.text)}>No feedback yet</p>
    )
}