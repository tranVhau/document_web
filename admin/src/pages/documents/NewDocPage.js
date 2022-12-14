import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import DocEditForm from "../../components/document/document-new/DocEditForm";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { newDocument } from "../../store/actions/documentAction";
import { getUserInfo } from "../../store/actions/userAction";
import { getAllCate } from "../../store/actions/categoryAction";

import classes from "../../components/UI/Button.module.css";
import { unwrapResult } from "@reduxjs/toolkit";

// react-select

const initValue = {
  name: "Comic Name Here",
  thumbnail: require("../asset/img/defaultThumnail.png"),
  categories: ["cate1", "cate2", "..."],
  categoriesID: [],
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nemo quae in delectus quod atque sunt recusandae accusantium optio. Soluta omnis quod ut quibusdam, reprehenderit ipsam in assumenda magni eaque?",
  username: "Author name", //current user/ or username
  avt: require("../asset/img/author.jpg"), //current user
  uploadTime: moment().format("DD/MMM/YY"), //current user
  src: "",
};

function NewDocPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = useSelector((state) => state.category);
  // const { userInfo } = useSelector((state) => state.user);
  const { document, error, success, loading } = useSelector(
    (state) => state.document
  );

  const [cateOptions, setCateOptions] = useState([]);
  const [userData, setUserData] = useState([]); //userInfo
  const [initVal, setInitVal] = useState(initValue);

  const fetchCategory = (arr) => {
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

  const getUserData = async () => {
    setUserData(unwrapResult(await dispatch(getUserInfo())));
  };
  useEffect(() => {
    dispatch(getAllCate());
    // dispatch(getUserInfo());
    getUserData();
  }, []);

  useEffect(() => {
    setCateOptions(fetchCategory(category));
    setUserData(userData);
    setInitVal((prev) => {
      return {
        ...prev,
        avt: userData.avt,
        username: userData.name,
      };
    });
  }, [category, userData]);

  const [data, setData] = useState(initVal);

  const newDocumentHandler = async () => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("desc", data.desc);
      formData.append("src", data.src);
      formData.append("user_id", userData.id);
      formData.append("isPublic", 1);
      data.categoriesID.forEach((cateID) => {
        formData.append("categories[]", cateID);
      });
      unwrapResult(await dispatch(newDocument({ document: formData })));
      toast("New Document Added", {
        type: "success",
      });
      setTimeout(() => {
        navigate("/doc-manage");
      }, 1500);
    } catch (error) {
      toast(error, {
        type: "error",
      });
    }
  };

  return (
    <>
      <DocEditForm
        setData={setData}
        initValues={initVal}
        cateOptions={cateOptions}
      />

      <div className={classes.btn_wrap}>
        <button className={classes.save__btn} onClick={newDocumentHandler}>
          SAVE
        </button>
      </div>

      <ToastContainer position="bottom-right" newestOnTop />
    </>
  );
}

export default NewDocPage;
