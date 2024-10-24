import PropTypes from "prop-types";
const Bookmark = ({ book }) => {
  console.log(book);
  const { title, image } = book;
  console.log(title);
  return (
    <div className="border-2 my-3 rounded-lg shadow-xl">
      <div className="flex justify-between items-center gap-2">
        <img className="w-[50px]" src={image} alt="" />
        <p className="w-[250px]">{title}</p>
        <button className="btn">delete</button>
      </div>
    </div>
  );
};
Bookmark.propTypes = {
  book: PropTypes.object,
};

export default Bookmark;
