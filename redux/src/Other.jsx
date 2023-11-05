import { useSelector } from "react-redux";
function Other() {
  const value = useSelector((state) => state);
  return <p>Other 에서 가져온 Redux State Value 는 {value} 입니다</p>;
}
export default Other;
