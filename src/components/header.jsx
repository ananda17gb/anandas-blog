function Header({ onClickBuatBlog }) {
  return (
    <>
      <div class="grid grid-cols-2 ">
        <div className="title" class="self-center">
          <button class="my-6 ml-9 text-2xl font-bold">Blog GDSC Telyu</button>
        </div>
        <div className="buat" class="flex justify-end  self-center">
          <button
            class="my-6 mr-8 bg-[#D2D2D2] rounded py-2 px-6 font-bold"
            onClick={onClickBuatBlog}
          >
            Buat Blog
          </button>
        </div>
      </div>
      <hr class="border-1 border-[#0000004D]" />
    </>
  );
}

export default Header;
