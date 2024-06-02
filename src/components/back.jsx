import PropTypes from "prop-types";
function Back({ handleClickBack }) {
  return (
    <>
      <div className="grid grid-cols-2 ">
        <div className="self-center">
          <button
            onClick={handleClickBack}
            className="my-6 ml-9 text-2xl font-bold "
          >
            Kembali
          </button>
        </div>
      </div>
      <hr className="border-1 border-[#0000004D]" />
    </>
  );
}

Back.propTypes = {
  handleClickBack: PropTypes.func.isRequired,
};

export default Back;
