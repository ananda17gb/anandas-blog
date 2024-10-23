import Header from "../components/header";
import Footer from "../components/footer";
import Card from "../components/card";
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
      <div
        id="home"
        className="flex flex-col justify-center items-center h-screen bg-[#F1F1F1]"
      >
        <h1 className="text-[#232323] text-[64px] font-bold">
          Welcome to our blog page!
        </h1>
        <h1 className="text-[#969696] text-[40px]">Please enjoy our blogs</h1>
      </div>
      <div className="my-10 h-full">
        <h1 className="pl-52 font-bold text-4xl">Latest Post</h1>
        <div className="mt-20 flex flex-wrap justify-center gap-20">
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
      </div>
      <Footer />
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
