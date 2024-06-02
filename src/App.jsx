import { useEffect, useState } from "react";
import ListBlog from "./page/ListBlog.jsx";
import ViewBlog from "./page/ViewBlog.jsx";
import CreateBlog from "./page/CreateBlog.jsx";
import { db } from "./firebase-config";
import { storage } from "./firebase-config";
import EditBlog from "./page/EditBlog.jsx";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
// import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  // ! Buat pindah" page
  const [page, setPage] = useState("home");

  const handleClickBackHome = () => {
    setPage("home");
  };

  const handleClickBackView = () => {
    setPage("view");
  };

  const onClickEditBlog = (blog) => {
    event.preventDefault();
    setSelectedBlog(blog);
    setPage("edit");
  };
  const onClickBlogContent = (blog) => {
    setSelectedBlog(blog);
    setPage("view");
  };
  // !

  const [data, setData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  // const [newData, setNewData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  // ! GET
  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "blog"));
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(dataList[0]);
      setData(dataList);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  // ! GET END

  // ! PUSH
  const addData = async (newData) => {
    try {
      let madeDataDate = new Date().toLocaleString();
      newData.date = madeDataDate;
      await addDoc(collection(db, "blog"), newData);
      fetchData();
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };
  // ! PUSH END

  // ! DELETE
  const deleteData = async (id) => {
    try {
      await deleteDoc(doc(db, "blog", id));
      fetchData();
    } catch (error) {
      console.error("Error deleting data: ", error);
    }
  };
  // ! DELETE END

  // ! UPDATE
  const updateData = async (id, updatedText) => {
    try {
      await setDoc(doc(db, "blog", id), updatedText, { merge: true });
      fetchData;
      if (selectedBlog && selectedBlog.id === id) {
        setSelectedBlog({ ...selectedBlog, ...updatedText });
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const updateListBlog = async () => {
    await fetchData();
  };
  // ! UPDATE END

  // ! STORAGE UPLOAD IMAGE
  const uploadImage = async (file) => {
    if (!file) return null;
    const storageRef = ref(storage, `/thumbnailimages-blog/${file.name}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };
  // ! STORAGE UPLOAD IMAGE END

  return (
    <div>
      {page === "create" && (
        <CreateBlog
          handleClickBack={handleClickBackHome}
          addData={addData}
          handleUpdate={updateData}
          uploadImage={uploadImage}
        />
      )}
      {page === "edit" && (
        <EditBlog
          handleClickBackEdit={handleClickBackView}
          updateData={updateData}
          selectedBlog={selectedBlog}
          handleAddData={addData}
          uploadImage={uploadImage}
        />
      )}
      {page === "view" && selectedBlog && (
        <>
          <ViewBlog
            handleClickBack={handleClickBackHome}
            onClickEditBlog={() => onClickEditBlog(selectedBlog)}
            blog={selectedBlog}
            updateListBlog={updateListBlog}
            deleteData={deleteData}
          />
        </>
      )}
      {page === "home" && (
        <>
          <ListBlog
            onClickBuatBlog={() => {
              setPage("create");
            }}
            onClickBlogContent={onClickBlogContent}
            data={data}
            onClickEditBlog={onClickEditBlog}
            updateData={updateData}
          />
        </>
      )}
      {/* <SpeedInsights /> */}
    </div>
  );
}

export default App;

// ! Cek koneksi firestore database
// const docRef = doc(db, "blog", "R3iS5eckS995Gr69qBus")
// const getData = async () => {
//   const docSnap = await getDoc(docRef);
//   console.log(docSnap.data())
// }
// useEffect(() => {
//   getData();
// }, []);
// !
