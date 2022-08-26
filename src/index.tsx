import ReactDOM from "react-dom";
import EventComponent from "./event/EventComponent";
import UserSearch from "./refs/UserSearch";

const App = () => {
  return (
    <div>
      <UserSearch />
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
