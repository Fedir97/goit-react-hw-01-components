import Profile from "./WebProfile/Profile";
import user from "../assets/user.json"
import Statistics from "./Statistics/Statistics"
import data from "../assets/data.json"
import FriendsList from "./FriendsList/Friends"
import friends from "../assets/friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from "../assets/transactions.json"
export const App = () => {
  return (
    <div>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

<Statistics title="Upload stats" stats={data} />
<FriendsList friends={friends} />;
<TransactionHistory items={transactions} />;
    </div>
  );
};



