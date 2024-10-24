const cart = ({ cart, handelBookmark }) => {
  // console.log(cart);
  const { title, category, price, image, rating } = cart;
  return (
    <div>
      <div className="flex justify-between mb-4 ">
        <div className="card card-compact bg-base-100 shadow-xl w-[350px] h-[480px]">
          <figure>
            <img className="w-[200px] h-[200px]" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="text-2xl font-bold">{title}</h2>
            <p>{category}</p>
            <div className="flex justify-between mx-2">
              <p>
                {rating.rate} ⭐ ({rating.count})
              </p>
              <p>{price}$</p>
            </div>
            <div className="card-actions justify-end">
              <button
                className="btn bg-white text-black border-2 border-blue-200 btn-primary"
                onClick={() => {
                  handelBookmark(cart);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
