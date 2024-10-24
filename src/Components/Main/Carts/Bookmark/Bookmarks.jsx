import Bookmark from "./Bookmark";

const Bookmarks = () => {
  return (
    <div className="border-2 border-blue-100 md:col-span-3 sm:col-span-12 rounded-lg">
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>
      <div className="border-2 m-2 shadow-xl p-4">
        <Bookmark></Bookmark>
      </div>
    </div>
  );
};

export default Bookmarks;
