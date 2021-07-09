import { useState } from "react";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";
import { User } from "./models/user.model";

const App = () => {
  const [route, setRoute] = useState<string>('signin');
  const [user, setUser] = useState<User>({
    id: '',
    name: '',
    email: '',
    joined: '',
  },
  );

  const onRouteChange = (route: string): void => {
    setRoute(route);
  };

  const loadeUser = (user: User): void => {
    setUser(user);
  };

  return (
    <div className="App">
      {route === 'home' ? (
        <Home onRouteChange={onRouteChange} user={user} />
      ) : route === 'signin' ? (
        <Signin onRouteChange={onRouteChange} loadeUser={loadeUser} />
      ) : (
        <Register onRouteChange={onRouteChange} loadeUser={loadeUser} />
      )}
    </div>
  );
}

export default App;
