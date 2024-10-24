import { useState } from "react";
import Header from "./Components/Header";
import Bookmarks from "./Components/Main/Carts/Bookmark/Bookmarks";
import Carts from "./Components/Main/Carts/Carts";

const App = () => {
  // add
  const [bookmark, setBookmark] = useState([]);
  const handelBookmark = (newItem) => {
    const newBookmark = [...bookmark, newItem];
    setBookmark(newBookmark);
  };
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-12 w-full gap-6 mx-auto">
        <Carts handelBookmark={handelBookmark}></Carts>
        <Bookmarks bookmark={bookmark}></Bookmarks>
      </div>
    </div>
  );
};

export default App;
