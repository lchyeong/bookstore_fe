import { Link } from "react-router-dom";

function Product() {
  return (
    <main className="min-h-[300px]">
      <Link className="block" to="/category/management">
        카테고리 관리
      </Link>
      <Link className="block" to="/product/management">
        상품 관리
      </Link>
      <br />
      <div>상품 관리 페이지</div>
    </main>
  );
}

export default Product;
