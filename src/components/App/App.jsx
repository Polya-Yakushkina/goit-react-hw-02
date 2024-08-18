import Profile from "../Profile/Profile";
import FriendList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

import userData from "../Data/userData.json";
import friends from "../Data/friends.json";
import transactions from "../Data/transactions.json";

import css from "./App.module.css";
import clsx from "clsx";

export default function App() {
  return (
    <div className={clsx(css.app)}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}