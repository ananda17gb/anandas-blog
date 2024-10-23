import PropTypes from "prop-types";
function BackConfirm({ handleClickBack, handleAddData, handleUpdate, isEdit }) {
  const handleConfirmAndFinish = async () => {
    try {
      await handleAddData();
      handleClickBack();
    } catch (error) {
      console.error("Error during confirmation:", error);
    }
  };
  const handleUpdateAndFinish = async () => {
    try {
      await handleUpdate();
      handleClickBack();
    } catch (error) {
      console.error("Error during confirmation:", error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="self-center">
          <button
            onClick={handleClickBack}
            className="my-6 ml-9 text-2xl font-bold "
          >
            Go Back
          </button>
        </div>
        <div className="flex justify-end  self-center">
          <button
            onClick={isEdit ? handleUpdateAndFinish : handleConfirmAndFinish}
            className="my-6 mr-8 bg-[#D2D2D2] rounded py-2 px-6 font-bold"
          >
            {isEdit ? "Change & Done" : "Confirm & Done"}
          </button>
        </div>
      </div>
      <hr className="border-1 border-[#0000004D]" />
    </>
  );
}

BackConfirm.propTypes = {
  handleClickBack: PropTypes.func.isRequired,
  handleAddData: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  isEdit: PropTypes.bool.isRequired,
};
export default BackConfirm;
