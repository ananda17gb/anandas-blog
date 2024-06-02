import PropTypes from "prop-types";
import BackConfirm from "../components/backconfirm.jsx";
import { useState } from "react";
export default function EditBlog({
  handleClickBackEdit,
  updateData,
  selectedBlog,
  handleAddData,
  uploadImage,
}) {
  const [formData, setFormData] = useState({
    title: selectedBlog.title,
    description: selectedBlog.description,
    content: selectedBlog.content,
    image: selectedBlog.image,
  });

  const { title, description, content } = formData;

  const handleUpdate = async () => {
    let updatedFormData = { ...formData };

    if (formData.image && formData.image instanceof File) {
      const imageURL = await uploadImage(formData.image);
      updatedFormData.image = imageURL;
    }

    await updateData(selectedBlog.id, updatedFormData);
  };

  const handleInputChange = (e) => {
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

  return (
    <>
      <BackConfirm
        handleClickBack={handleClickBackEdit}
        handleUpdate={handleUpdate}
        handleAddData={handleAddData}
        isEdit={true}
      />
      <div className="grid grid-cols-3 gap-4 mt-16 min-w-min">
        <form className="col-start-2 row-start-1">
          <label className=" text-4xl font-bold">Edit Blog</label>
          <hr className="mt-5 mb-10 border-1 border-[#0000004D]" />
          <label className="text-2xl font-bold">Title</label>
          <br />
          <input
            type="text"
            className="mt-2 mb-6 block flex-1 border-2 rounded bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Blog title"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
          <label className="text-2xl font-bold">Description</label>
          <br />
          <textarea
            className="mt-2 block flex-1 border-2 rounded bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 self-start"
            placeholder="Blog description"
            name="description"
            value={description}
            onChange={handleInputChange}
          />
          <label className="text-2xl font-bold">Content</label>
          <br />
          <textarea
            className="mt-2 block flex-1 border-2 rounded bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 self-start"
            placeholder="Blog content"
            name="content"
            value={content}
            onChange={handleInputChange}
          />
          <label className="text-2xl font-bold">Thumbnail</label>
          <br />
          <input
            type="file"
            className="mt-2 mb-6 block flex-1 bg-transparent py-1.5 pl-1 w-[630px] text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            name="image"
            onChange={handleInputChange}
            accept=".jpg, .jpeg, .png"
          />
        </form>
      </div>
    </>
  );
}

EditBlog.propTypes = {
  handleClickBackEdit: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
  handleAddData: PropTypes.func.isRequired,
  uploadImage: PropTypes.func.isRequired,
  selectedBlog: PropTypes.object.isRequired,
};
