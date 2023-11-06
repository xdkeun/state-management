import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import UserContext from "../context/UserContext";

function Text() {
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);
  const user = useContext(UserContext);
  return <div>{user}</div>;
}
export default Text;
