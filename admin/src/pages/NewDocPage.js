import React, { useEffect, useState } from "react";

import DocEditForm from "../components/document/document-new/DocEditForm";

import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { newDocument } from "../store/actions/documentAction";
import { getAllCate } from "../store/actions/categoryAction";

const authorOptions = [
  {
    value: "Author1",
    label: "Author1",
    img: require("./asset/img/green.webp"),
  },
  {
    value: "Author2",
    label: "Author2",
    img: require("./asset/img/red.webp"),
  },
  {
    value: "Author3",
    label: "Author3",
    img: require("./asset/img/yellow.webp"),
  },
  {
    value: "Author4",
    label: "Author4",
    img: require("./asset/img/blue.webp"),
  },
];

// react-select

const initVal = {
  name: "Document Name Here",
  thumbnail: require("./asset/img/default_2.png"),
  categories: ["cate1", "cate2", "..."],
  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio nemo quae in delectus quod atque sunt recusandae accusantium optio. Soluta omnis quod ut quibusdam, reprehenderit ipsam in assumenda magni eaque?",
  author: "Author name",
  authorAvt: require("./asset/img/author.jpg"),
  uploadTime: "dd/MM/yyy",
  fileSrc: "",
};

function NewDocPage() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  const [cateOptions, setCateOptions] = useState([]);

  const fetchCategory = (arr) => {
    const categories = [];
    arr.map((cate) => {
      categories.push({
        value: cate.name,
        label: cate.name,
      });
    });
    return categories;
  };
  useEffect(() => {
    dispatch(getAllCate());
  }, []);
  useEffect(() => {
    setCateOptions(fetchCategory(category));
  }, [category]);

  const [data, setData] = useState(initVal);
  return (
    <>
      <DocEditForm
        setData={setData}
        initVal={initVal}
        cateOptions={cateOptions}
        authorOptions={authorOptions}
      />

      <button
        onClick={() => {
          console.log(data);
        }}
      >
        SAVE
      </button>
    </>
  );
}

export default NewDocPage;
