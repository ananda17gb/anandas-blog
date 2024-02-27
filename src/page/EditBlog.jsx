import BackConfirm from "../components/backconfirm.jsx";
export default function CreateBlog({ handleClickBack }) {
  return (
    <>
      <BackConfirm handleClickBack={handleClickBack} />
      <div className="grid grid-cols-3 gap-4 mt-16 min-w-min">
        <form className="col-start-2 row-start-1">
          <label className=" text-4xl font-bold">Edit Blog</label>
          <hr className="mt-5 mb-10 border-1 border-[#0000004D]" />
          <label className="text-2xl font-bold">Judul</label>
          <br />
          <input
            type="text"
            className="mt-2 mb-6 block flex-1 border-2 rounded bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Judul blog"
          />
          <label className="text-2xl font-bold">Isi</label>
          <br />
          <textarea
            className="mt-2 block flex-1 border-2 rounded bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 self-start"
            placeholder="Isi blog"
          />
        </form>
      </div>
    </>
  );
}
