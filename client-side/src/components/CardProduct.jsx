import "../App.css";
import { Link } from "react-router-dom";

function CardProduct({ product }) {
  return (
    <div className="CardProduct">
      <Link to={`/product/${product.id}`}>
        <li>
          <a className="block overflow-hidden group ">
            <img src={product.mainImg} className="w-[230px] h-[287px] object-cover" />

            <div className="relative pt-3 bg-white">
              <h3 className="text-m font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4">{product.name}</h3>

              <p className="mt-2">
                <span className="sr-only"> Regular Price </span>

                <span className="tracking-wider text-gray-900"> Rp {product.price} </span>
              </p>
            </div>
          </a>
        </li>
      </Link>
    </div>
  );
}
export default CardProduct;
