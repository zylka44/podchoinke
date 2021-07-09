import { User } from '.';

export interface RegisterProps {
  onRouteChange: (route: string) => void;
  loadeUser: (user: User) => void;
}
