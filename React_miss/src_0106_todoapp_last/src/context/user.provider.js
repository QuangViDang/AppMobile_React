import { useReducer} from "react";
import reducer, { initState } from "./user.reducer";
import UserContext from "./user.context";

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;
