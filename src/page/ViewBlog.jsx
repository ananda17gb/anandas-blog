import PropTypes from "prop-types";
import Back from "../components/back.jsx";

export default function ViewBlog({
  handleClickBack,
  onClickEditBlog,
  blog,
  updateListBlog,
  deleteData,
}) {
  const handleDeleteData = () => {
    event.preventDefault();
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this data?"
    );
    if (confirmDelete) {
      deleteData(blog.id);
      handleClickBack();
    }
  };

  const handleBackClick = () => {
    updateListBlog();
    handleClickBack();
  };
  const convertNewLinesToBreaks = (text) => {
    return text.split("\n").map((item, index) => (
      <span key={index} className="block">
        {item}
        <br />
      </span>
    ));
  };
  return (
    <>
      <Back handleClickBack={handleBackClick} />
      <div className="bg-[#B4B4B4] flex mx-auto max-w-xl h-64 mt-9">
        <img
          src={blog.image}
          alt={blog.title}
          className="mx-auto object-cover"
        />
      </div>
      <div className="grid grid-cols-6 gap-2 mt-4 w-screen ">
        <p className="col-start-3 pl-8 pr-8 text-xl font-bold block col-span-2 text-justify">
          {blog.title}
        </p>
        <p className="col-start-3 row-start-2 ml-8">{blog.date}</p>
        <div className="col-start-4 row-start-2 flex justify-end space-x-2 mr-8">
          <a href="" className="hover:underline" onClick={onClickEditBlog}>
            Edit
          </a>
          <span>|</span>
          <a href="" className="hover:underline" onClick={handleDeleteData}>
            Delete
          </a>
        </div>
        <p className="col-start-3 col-span-2 ml-8 mr-8 overflow-auto pb-9 text-justify whitespace-pre-line indent-8">
          {convertNewLinesToBreaks(blog.content)}
        </p>
      </div>
    </>
  );
}

ViewBlog.propTypes = {
  handleClickBack: PropTypes.func.isRequired,
  onClickEditBlog: PropTypes.func.isRequired,
  updateListBlog: PropTypes.func.isRequired,
  deleteData: PropTypes.func.isRequired,
  blog: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
