import { useEffect } from "react";
import Login from "./components/Auth/Login";
import Chats from "./components/Chat/Chats";
import { useMyContext } from "./components/Store/Context/Context";
const App = () => {
  const [state, dispatch] = useMyContext();
  const status = state.auth.status;

  return <>{status ? <Chats /> : <Login />}</>;
};

export default App;
