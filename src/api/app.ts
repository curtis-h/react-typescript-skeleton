import { User } from "@src/framework/types";

export const login = (): Promise<User> => new Promise((resolve) => {
  setTimeout(() => {
    const user: User = { name: "timeout" };
    resolve(user);
  }, 1000);
});
