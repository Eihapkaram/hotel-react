import Table from "react-bootstrap/Table";
import { removone } from "/src/Redux/Slices/CartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function Cart() {
  const useSt = useSelector((state) => state.Cart);
  const total = useSt.reduce((acc, pro) => {
    return (acc += pro.price * pro.quantity);
  }, 0);
  const fier = useDispatch();
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>quantity</th>
            <th>product</th>
            <th>title</th>
            <th>price</th>
            <th>acton</th>
          </tr>
        </thead>
        <tbody>
          {useSt.map((el) => (
            <tr>
              <td>{el.quantity}</td>
              <td>
                <img width={"100px"} src={el.image} />
              </td>
              <td>{el.title}</td>

              <td>{el.price}</td>
              <td>
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={() => {
                    fier(removone(el));
                  }}
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <h3>total: {total.toFixed(0)}$</h3>
        </tfoot>
      </Table>
    </div>
  );
}
export default Cart;
