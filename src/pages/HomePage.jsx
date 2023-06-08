import AllProducts from "../components/AllProducts";
import CategoryNames from "../components/CategoryNames";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <CategoryNames />
      <AllProducts />
    </>
  );
}
export default HomePage;