import { createContext } from "react";

export interface User {
  id: string;
  name: string;
}

export type UserContextType = {
  user: User | null;
};

const UserContext = createContext<UserContextType>({
  user: null,
});

export default UserContext;
