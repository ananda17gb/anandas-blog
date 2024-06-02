import Header from "../components/header.jsx";
import Card from "../components/card.jsx";
import PropTypes from "prop-types";
export default function ListBlog({
  onClickBuatBlog,
  onClickBlogContent,
  data,
}) {
  const sortedData = data
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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
      <div className="mt-10 flex justify-around flex-wrap">
        {sortedData.map((item) => (
          <div key={item.id}>
            <Card
              title={item.title}
              description={item.description}
              image={item.image}
              onClickBlogContent={onClickBlogContent}
              blogData={item}
            />
          </div>
        ))}
      </div>
    </>
  );
}

ListBlog.propTypes = {
  onClickBuatBlog: PropTypes.func.isRequired,
  onClickBlogContent: PropTypes.func.isRequired,
  onClickEditBlog: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string,
      date: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};
