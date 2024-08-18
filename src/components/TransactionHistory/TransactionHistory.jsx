import clsx from "clsx";
import css from "./TransactionHistory.module.css";

import TransactionItem from "../TransactionItem/TransactionItem";

export default function TransactionHistory({ items }) {
    return (
        <div className={clsx(css.container)}>
        <table className={clsx(css.table)}>
            <thead className={clsx(css.header)}>
                <tr className={clsx(css.headerList)}>
                    <th className={clsx(css.headerItem)}>Type</th>
                    <th className={clsx(css.headerItem)}>Amount</th>
                    <th className={clsx(css.headerItem)}>Currency</th>
                </tr>
            </thead>
            
            <tbody className={clsx(css.list)}>
                {items.map(item => {
                    return (
                        <tr key={item.id} className={clsx(css.item)}>
                            <TransactionItem item={item} />
                        </tr>
                    )
                })}
                
            </tbody>
            </table>
        </div>
    );
}