import clsx from "clsx";
import css from "./TransactionItem.module.css";

export default function TransactionItem({ item: { type, amount, currency } }) {
    return (
        <>
            <td className={clsx(css.value)}>{type}</td>
            <td className={clsx(css.value)}>{amount}</td>
            <td className={clsx(css.value)}>{currency}</td>
        </>
    );
}
