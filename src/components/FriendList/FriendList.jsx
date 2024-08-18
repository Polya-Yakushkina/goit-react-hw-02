import FriendListItem from "../FriendListItem/FriendListItem"

import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <div className={clsx(css.container)}>
            <ul className={clsx(css.list)}> {
            friends.map(item => {
                return (
                    <li key={item.id} className={clsx(css.item)}>
                        <FriendListItem friend={item} />
                    </li>);
            })}
            </ul>
            </div>);
}
