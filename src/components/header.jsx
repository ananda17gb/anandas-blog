import PropTypes from "prop-types";
function Header({ onClickBuatBlog }) {
  return (
    <>
      <div className="fixed top-0 w-full flex justify-center bg-[#F7FBFC]">
        <a
          href="#home"
          className="my-6 mr-8 rounded py-2 px-6 hover:underline hover:font-bold"
        >
          Home
        </a>
        <button className="my-6 mr-8 rounded py-2 px-6 hover:underline hover:font-bold">
          About Us
        </button>
        <button
          className="my-6 mr-8 rounded py-2 px-6 hover:underline hover:font-bold"
          onClick={onClickBuatBlog}
        >
          Admin
        </button>
      </div>
    </>
  );
}

Header.propTypes = {
  onClickBuatBlog: PropTypes.func.isRequired,
};

export default Header;
