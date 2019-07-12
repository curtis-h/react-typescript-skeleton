import { DashboardContainer } from "./dashboardContainer";
import { LoginContainer } from "./loginContainer";

export type Pages = typeof Pages;
export type PageKeys = keyof Pages;

export const Pages = {
  Dashboard: DashboardContainer,
  Login: LoginContainer
};

