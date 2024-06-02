function Header({ onClickBuatBlog }) {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="self-center">
          <button className="my-6 ml-9 text-2xl font-bold">Blog GDSC Telyu</button>
        </div>
        <div className="flex justify-end  self-center">
          <button
            className="my-6 mr-8 bg-[#D2D2D2] rounded py-2 px-6 font-bold"
            onClick={onClickBuatBlog}
          >
            Buat Blog
          </button>
        </div>
      </div>
      <hr className="border-1 border-[#0000004D]" />
    </>
  );
}

export default Header;
