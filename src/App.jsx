import { useState } from "react";
import ListBlog from "./page/ListBlog.jsx";
import ViewBlog from "./page/ViewBlog.jsx";
import CreateBlog from "./page/CreateBlog.jsx";
import EditBlog from "./page/EditBlog.jsx";

function App() {
  const [page, setPage] = useState("home");
  function handleClickBack() {
    setPage("home");
  }
  return (
    <div>
      {page === "create" && <CreateBlog handleClickBack={handleClickBack} />}
      {page === "edit" && <EditBlog handleClickBack={handleClickBack} />}
      {page === "view" && (
        <>
          <ViewBlog handleClickBack={handleClickBack} />
        </>
      )}
      {page === "home" && (
        <>
          <ListBlog
            onClickBuatBlog={() => {
              setPage("create");
            }}
            onClickBlogContent={() => {
              setPage("view");
            }}
            onClickEditBlog={() => {
              setPage("edit");
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
