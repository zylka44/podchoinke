import { User } from '.';

export interface SigninProps {
  onRouteChange: (route: string) => void;
  loadeUser: (user: User) => void;
}
