import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import CategoryNames from "../components/CategoryNames";

function PageNotFound() {
  return (
    <>
      <Navbar />
      <CategoryNames />
      <p>Page Not Found</p>
    </>
  );
}
export default PageNotFound;
