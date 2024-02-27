function BackConfirm({ handleClickBack }) {
  return (
    <>
      <div class="grid grid-cols-2 ">
        <div className="title" class="self-center">
          <button
            onClick={handleClickBack}
            class="my-6 ml-9 text-2xl font-bold "
          >
            Kembali
          </button>
        </div>
        <div className="buat" class="flex justify-end  self-center">
          <button class="my-6 mr-8 bg-[#D2D2D2] rounded py-2 px-6 font-bold">
            Konfirmasi & Selesai
          </button>
        </div>
      </div>
      <hr class="border-1 border-[#0000004D]" />
    </>
  );
}

export default BackConfirm;
