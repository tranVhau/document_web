import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DocUpdateForm from "../components/document/document-new/DocUpdateFrom";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { getAllCate } from "../store/actions/categoryAction";
import { getAllDocument, getDocument } from "../store/actions/documentAction";
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

function EditDocPage() {
  const dispatch = useDispatch();
  const { docId } = useParams();
  const { category } = useSelector((state) => state.category);

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
      const { data } = await documentAPI.get(9);
      const doc = data[0];
      const newInitVal = {};
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

  console.log("main", initVal);

  const [data, setData] = useState(initVal);

  return (
    <>
      <h3>EDIT DOCUMENT</h3>
      <DocUpdateForm
        setData={setData}
        initDocData={initVal}
        cateOptions={cateOptions}
      />

      <button
        onClick={() => {
          console.log("update", data);
          // fetchDocData();
        }}
      >
        UPDATE
      </button>
    </>
  );
}

export default EditDocPage;
