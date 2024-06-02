import PropTypes from "prop-types";

export default function Card({
  onClickBlogContent,
  title,
  description,
  image,
  blogData,
}) {
  return (
    <div className="card grid rounded-lg">
      <button
        onClick={() => onClickBlogContent(blogData)}
        className="relative w-96 h-48 bg-[#B4B4B4] p-0 overflow-hidden"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-200 hover:scale-110"
        />
      </button>
      <div className="w-96 h-36 bg-[#EDEDED]">
        <button
          onClick={() => onClickBlogContent(blogData)}
          className="pl-2 pt-1 pb-1 pr-1 text-xl font-semibold hover:underline"
        >
          <div className="line-clamp-1">{title}</div>
        </button>
        <div className="pl-3 pt-1 pb-1 pr-1 text-base leading-7 line-clamp-3 row-start-2 border-t-2 border-[#31313184] mx-2">
          {description}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  onClickBlogContent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  blogData: PropTypes.object.isRequired,
};
