import Header from "../components/header.jsx";
import Card from "../components/card.jsx";
export default function ListBlog({
  onClickBuatBlog,
  onClickBlogContent,
  onClickEditBlog,
}) {
  return (
    <>
      <Header onClickBuatBlog={onClickBuatBlog} />
      <br />
      <br />
      <div>
        <h1 className="text-center font-bold text-4xl">
          Selamat Datang di Blog Kami!
        </h1>
        <p className="mt-2 text-center text-base">
          Ini adalah tempat kami menulis blog.
        </p>
      </div>
      <div class="mt-10 flex justify-around flex-wrap">
        <Card
          onClickBlogContent={onClickBlogContent}
          onClickEditBlog={onClickEditBlog}
        />
      </div>
    </>
  );
}
