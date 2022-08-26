import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("Clicked")}>fefef</ChildAsFC>;
};

export default Parent;
