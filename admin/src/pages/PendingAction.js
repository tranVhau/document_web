import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DocUpdateForm from "../components/document/document-new/DocUpdateFrom";
import { useParams, navigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { getAllCate } from "../store/actions/categoryAction";
import { update, delDocument } from "../store/actions/documentAction";
import documentAPI from "../api/documentAPI";
import moment from "moment";

const initValue = {
  name: "Comic Name Here",
  thumbnail: require("./asset/img/default_2.png"),
  categories: ["cate1", "cate2", "..."],
  categoriesID: [],
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nemo quae in delectus quod atque sunt recusandae accusantium optio. Soluta omnis quod ut quibusdam, reprehenderit ipsam in assumenda magni eaque?",
  username: "Author name", //current user/ or username
  avt: require("./asset/img/author.jpg"), //current user
  uploadTime: "dd/MM/yyy", //current user
  src: "",
};

function PendingActions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { category } = useSelector((state) => state.category);
  const { success, error, loading } = useSelector((state) => state.document);

  const [cateOptions, setCateOptions] = useState([]);
  // const [userData, setUserData] = useState([]); //userInfo
  const [initVal, setInitVal] = useState({});

  const fetchAllCate = (arr) => {
    const categories = [];
    arr.map((cate) => {
      categories.push({
        value: cate.name,
        label: cate.name,
        id: cate.id,
      });
    });
    return categories;
  };

  const fetchDocData = async () => {
    try {
      const { data } = await documentAPI.getPending(id);
      const doc = data[0];
      setInitVal((initVal) => ({
        ...initVal,
        name: doc.name,
        avt: doc.avt,
        username: doc.username,
        categories: doc.categories,
        categoriesID: [],
        thumbnail: doc.thumbnail,
        desc: doc.desc,
        src: doc.src,
        uploadTime: moment(doc.created_at).format("DD/MMM/YY"),
      }));
    } catch (error) {}
  };

  useEffect(() => {
    dispatch(getAllCate());
  }, []);

  useEffect(() => {
    fetchDocData();
    setCateOptions(fetchAllCate(category));
  }, [category]);

  const [data, setData] = useState(initVal);

  const updateDocumentHandler = () => {
    const formData = new FormData();
    formData.append("document_id", id);
    formData.append("name", data.name);
    formData.append("desc", data.desc);
    formData.append("isPublic", 1);
    typeof data.src == "string"
      ? formData.append("src", "")
      : formData.append("src", data.src);
    data.categoriesID.forEach((cateID) => {
      formData.append("categories[]", cateID);
    });
    dispatch(update({ id: id, document: formData }));
    if (success) {
      toast("Update Successfully", {
        type: "success",
      });
      setTimeout(() => {
        navigate("/doc-manage");
      }, 1500);
    } else {
      toast("Update Failed", {
        type: "error",
      });
    }
  };

  const declineDocumentHandler = () => {
    dispatch(delDocument(id));
    toast("Document Delete Successfully", {
      type: "success",
    });
  };

  return (
    <>
      <h3>EDIT/APPROVE POST</h3>
      <DocUpdateForm
        setData={setData}
        initDocData={initVal}
        cateOptions={cateOptions}
      />

      <button onClick={updateDocumentHandler}>APPORVE</button>
      <button onClick={declineDocumentHandler}>DECLINE</button>
      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
}

export default PendingActions;
