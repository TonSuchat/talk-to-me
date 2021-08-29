import { FC } from "react";
import UserContext, { User, UserContextType } from "../contexts/userContext";

const withUser = <TProps,>(Component: FC<TProps>, user: User) => {
  const contextValue: UserContextType = { user };
  const wrapped: FC<TProps> = (props) => {
    return (
      <UserContext.Provider value={contextValue}>
        <Component {...props} />
      </UserContext.Provider>
    );
  };
  wrapped.displayName = `withUser${Component.displayName || "Component"}`;
  return wrapped;
};

export default withUser;
