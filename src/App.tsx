import { useState } from "react";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

const App = () => {
  const [route, setRoute] = useState<string>('home');

  return (
    <div>
      {route === 'home' ? (
          <Home />
        ) : route === 'signin' ? (
          <Signin />
        ) : (
          <Register />
        )}
    </div>
  );
}

export default App;
