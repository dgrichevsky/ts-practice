import UserContext, { UserState } from "./store";
import { useState, useContext } from "react";

// create sub component to consume the context

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      {user.first}, {user.last}
    </div>
  );
}
// create a store
function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Dan",
    last: "Grichevsky",
  });
  return (
    <div>
      <UserContext.Provider value={user}>
        <ConsumerComponent />
        <button
          onClick={() =>
            setUser({
              first: "John",
              last: "Doe",
            })
          }
        >
          Change Context
        </button>
      </UserContext.Provider>
    </div>
  );
}
export default UseContextComponent;
