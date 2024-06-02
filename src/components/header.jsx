import PropTypes from "prop-types";
function Header({ onClickBuatBlog }) {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="self-center">
          <button className="my-6 ml-9 text-2xl font-bold">
            Ananda&apos;s Blog
          </button>
        </div>
        <div className="flex justify-end  self-center">
          <button
            className="my-6 mr-8 bg-[#D2D2D2] rounded py-2 px-6 font-bold"
            onClick={onClickBuatBlog}
          >
            Create Blog
          </button>
        </div>
      </div>
      <hr className="border-1 border-[#0000004D]" />
    </>
  );
}

Header.propTypes = {
  onClickBuatBlog: PropTypes.func.isRequired,
};

export default Header;
