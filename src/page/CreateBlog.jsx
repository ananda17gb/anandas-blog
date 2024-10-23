import { useState } from "react";
import PropTypes from "prop-types";
import BackConfirm from "../components/backconfirm.jsx";

export default function CreateBlog({
  handleClickBack,
  addData,
  handleUpdate,
  uploadImage,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddData = async () => {
    let newFormData = { ...formData };

    if (formData.image) {
      const imageURL = await uploadImage(formData.image);
      newFormData.image = imageURL; // Use `image` field instead of `imageURL`
    }

    await addData(newFormData); // Pass the correct formData
    setFormData({
      title: "",
      description: "",
      content: "",
      image: null,
    });
  };

  return (
    <>
      <BackConfirm
        handleClickBack={handleClickBack}
        handleAddData={handleAddData}
        handleUpdate={handleUpdate}
        isEdit={false}
      />
      <div className="grid grid-cols-3 gap-4 mt-16 min-w-min">
        <form className="col-start-2 row-start-1">
          <label className="text-4xl font-bold">Create Blog</label>
          <hr className="mt-5 mb-10 border-1 border-[#0000004D]" />
          <label className="text-2xl font-bold">Title</label>
          <br />
          <input
            type="text"
            className="mt-2 mb-6 block flex-1 border-2 rounded bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Blog title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label className="text-2xl font-bold">Description</label>
          <br />
          <textarea
            type="text"
            className="mt-2 block flex-1 border-2 rounded bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 self-start"
            placeholder="Blog description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <label className="text-2xl font-bold">Content</label>
          <br />
          <textarea
            className="mt-2 block flex-1 border-2 rounded bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 self-start"
            placeholder="Blog content"
            name="content"
            value={formData.content}
            onChange={handleChange}
          />
          <label className="text-2xl font-bold">Thumbnail</label>
          <br />
          <input
            type="file"
            className="mt-2 mb-6 block flex-1 bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            name="image"
            onChange={handleChange}
            accept=".jpg, .jpeg, .png"
          />
        </form>
      </div>
    </>
  );
}

CreateBlog.propTypes = {
  handleClickBack: PropTypes.func.isRequired,
  addData: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func,
  uploadImage: PropTypes.func,
};
