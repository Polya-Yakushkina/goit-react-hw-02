import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ friend: {avatar, name, isOnline} }) {
    return (
        <div className={clsx(css.container)}>
            <img className={clsx(css.image)}
                src={avatar}
                alt="Avatar"
                width="120" />
            <p className={clsx(css.text)}>{name}</p>
            <p className={clsx(
                css.status,
                isOnline ? css.isOnline : css.isOffline
            )}
            >
                {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    );
}
