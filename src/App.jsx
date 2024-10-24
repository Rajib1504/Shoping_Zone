import Header from "./assets/Components/Header";
import Carts from "./assets/Components/Main/Carts/Carts";
import Bookmarks from "./assets/Components/Main/Carts/Bookmark/Bookmarks"
import Body from "./assets/Components/Main/Body";

const App = () => {
  return (
    
         <div>
      <Header></Header>
      <Body></Body>
      <Carts></Carts>
      <Bookmarks></Bookmarks>
      
    </div>
  
  );
};

export default App;