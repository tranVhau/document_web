import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DocUpdateForm from "../../components/document/document-new/DocUpdateFrom";
import { useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { getAllCate } from "../../store/actions/categoryAction";
import { delDocument } from "../../store/actions/documentAction";
import documentAPI from "../../api/documentAPI";
import { getUserInfo } from "../../store/actions/userAction";
import { newHistory } from "../../store/actions/historyAction";
import moment from "moment";
import { unwrapResult } from "@reduxjs/toolkit";

import { TiCancel, TiTick } from "react-icons/ti";

import classes from "../asset/css/StandardMain.module.css";

// const initValue = {
//   name: "Comic Name Here",
//   thumbnail: require("../asset/img/default_2.png"),
//   categories: ["cate1", "cate2", "..."],
//   categoriesID: [],
//   desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nemo quae in delectus quod atque sunt recusandae accusantium optio. Soluta omnis quod ut quibusdam, reprehenderit ipsam in assumenda magni eaque?",
//   username: "Author name", //current user/ or username
//   avt: require("../asset/img/author.jpg"), //current user
//   uploadTime: "dd/MM/yyy", //current user
//   src: "",
// };

function PendingActions() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { category } = useSelector((state) => state.category);
  const [cateOptions, setCateOptions] = useState([]);
  // const [userData, setUserData] = useState([]); //userInfo
  const [initVal, setInitVal] = useState({});

  const fetchAllCate = (arr) => {
    const categories = [];
    arr.forEach((cate) => {
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

  const approveDocumentHandler = async () => {
    try {
      const me = unwrapResult(await dispatch(getUserInfo()));
      const formData = new FormData();
      formData.append("document_id", id);
      formData.append("name", data.name);
      formData.append("desc", data.desc);
      formData.append("user_id", me.id);
      data.categoriesID.forEach((cateID) => {
        formData.append("categories[]", cateID);
      });

      unwrapResult(await dispatch(newHistory({ history: formData })));
      toast("Document Approved", {
        type: "success",
      });
      setTimeout(() => {
        navigate("/pending-post");
      }, 2000);
    } catch (error) {
      toast("Update Failed", {
        type: "error",
      });
    }
  };

  const declineDocumentHandler = () => {
    dispatch(delDocument(id));
    navigate("/pending-post");
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
        pending={true}
      />

      <div className={classes.btn__wrapper}>
        <button
          className={classes.cancel__btn}
          onClick={declineDocumentHandler}
        >
          <TiCancel />
          DECLINE
        </button>
        <button
          className={classes.approve__btn}
          onClick={approveDocumentHandler}
        >
          <TiTick />
          APPORVE
        </button>
      </div>
      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
}

export default PendingActions;
