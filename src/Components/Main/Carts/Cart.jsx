const cart = ({ cart }) => {
  // console.log(cart);
  const { title } = cart;
  return (
    <div>
      <div>
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
          <figure>
            <img src="" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p></p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cart;
