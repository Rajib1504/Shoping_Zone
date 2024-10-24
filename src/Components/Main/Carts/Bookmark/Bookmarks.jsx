import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Bookmarks = ({ bookmark }) => {
  // console.log(bookmark);
  return (
    <div className="border-2 border-blue-100 md:col-span-3 sm:col-span-12 rounded-lg">
      <h1 className="text-2xl font-bold text-center">Your Cart</h1>
      <div className="border-2 m-2 shadow-xl p-4">
        {bookmark?.map((newBook) => (
          <Bookmark key={newBook.id} book={newBook}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmark: PropTypes.array,
};

export default Bookmarks;
