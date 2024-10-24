import Header from "./Components/Header";
import Bookmarks from "./Components/Main/Carts/Bookmark/Bookmarks";
import Carts from "./Components/Main/Carts/Carts";

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-12 w-full gap-6 mx-auto">
        <Carts></Carts>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  );
};

export default App;
