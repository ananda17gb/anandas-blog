export default function Card({ onClickBlogContent, onClickEditBlog }) {
  return (
    <>
      <div className="card">
        <div
          className="card-image"
          class="w-72 h-48 bg-[#B4B4B4] rounded"
        ></div>
        <div className="carddesc" class="w-72 h-36 bg-[#EDEDED] rounded">
          <button
            onClick={onClickBlogContent}
            className="judul"
            class="pl-3 pt-2 font-bold text-2xl"
          >
            Judul Blog
          </button>
          <div className="desc" class="pl-3 text-base leading-7">
            Pada blog kali ini kami membahas tentang suatuh hal, hal ini sering
            ju...
          </div>
          <hr class="my-2 mx-3 border-1 border-[#0000004D]" />
          <div className="link" class="flex justify-between">
            <button onClick={onClickEditBlog} href="" class="pl-5 underline">
              Edit
            </button>
            <button href="" class="pr-5   underline">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
