import { User } from './user.model';

export interface HomeProps {
  onRouteChange: (route: string) => void;
  user: User;
}
