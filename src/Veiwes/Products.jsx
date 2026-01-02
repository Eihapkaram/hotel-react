import { addCart } from "/src/Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Products({ products }) {
  const usedis = useDispatch();
  if (!products || products.length === 0) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {products.map((pro) => {
        return (
          <div key={pro.id}>
            <img width="100px" src={pro?.image} />
            <h1>{pro?.title}</h1>
            <button
              onClick={() => {
                usedis(addCart(pro));
              }}
            >
              add
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
