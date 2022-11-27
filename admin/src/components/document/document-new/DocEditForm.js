import React, { useEffect, useState } from "react";
import Select from "react-select";

import DocumentItem from "../document-sample/DocumentItem";
import PdfSection from "../pdf/PdfSection";

import classes from "../../../pages/asset/css/NewDocPage.module.css";

function DocEditForm(props) {
  const [inputData, setInputData] = useState(props.initValues);
  const [pdfFile, setPdfFile] = useState(props.initValues.src);

  useEffect(() => {
    setInputData(props.initValues);
  }, [props.initValues]);

  useEffect(() => {
    props.setData(inputData);
  }, [inputData, props]);

  const authorInputHandler = (e) => {
    setInputData((prev) => {
      return {
        ...prev,
        author: e.value,
        authorAvt: e.img,
      };
    });
  };

  const formInputHandler = (e) => {
    const { value, name } = e.target;
    setInputData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const cateInputHandler = (arr) => {
    // const cateArr = inputData.categories;
    const cateArr = [];
    const cateArrID = [];
    arr.forEach((cate) => {
      cateArr.push(cate.value);
      cateArrID.push(cate.id);
    });

    setInputData((prev) => {
      return {
        ...prev,
        categories: cateArr,
        categoriesID: cateArrID,
      };
    });
  };

  const inputIMGHandler = (e) => {
    const { value, name } = e.target;
    const img = URL.createObjectURL(e.target.files[0]);
    setInputData((prev) => {
      return {
        ...prev,
        [name]: img,
      };
    });
  };

  const inputPDFHandler = (e) => {
    const { value, name } = e.target;
    let pdf;
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (e) => {
      setPdfFile(e.target.result);
    };

    pdf = e.target.files[0];
    //const pdf = URL.createObjectURL(e.target.files[0]);

    // console.log(pdf);
    // setPdfFile(URL.createObjectURL(e.target.files[0]));
    // setPdfFile(e.target.result);
    // console.log(pdfFile);
    setInputData((prev) => {
      return {
        ...prev,
        [name]: pdf,
      };
    });
  };

  return (
    <>
      <div className={classes.new_doc}>
        <div className={classes.preview_section}>
          <h2>Preview Document Tag</h2>
          <DocumentItem postData={inputData} />
        </div>
        <div className={classes.input_section}>
          <form className={classes.doc_form_info}>
            <div className={classes.doc_section}>
              <h2>Document</h2>
              <div>
                <label>Name</label>
                <input
                  placeholder="Document Name..."
                  className={classes.author_name_input}
                  name="name"
                  type={"text"}
                  onChange={formInputHandler}
                ></input>
              </div>
              <div>
                <label>Categories</label>
                <div className={classes.cate_choose}>
                  <Select
                    placeholder={"Select Categories..."}
                    closeMenuOnSelect={false}
                    defaultValue={[props.cateOptions[0]]}
                    isMulti
                    options={props.cateOptions}
                    onChange={cateInputHandler}
                  />
                </div>
              </div>
              <div>
                <label>Desciption</label>
                <textarea
                  name="desc"
                  placeholder="Desciption Here"
                  onChange={formInputHandler}
                ></textarea>
              </div>
              <div>
                <label>File</label>
                <div className={classes.filebtn_wrapper}>
                  <input
                    className={classes.uploadbtn}
                    name="src"
                    type={"file"}
                    onChange={inputPDFHandler}
                  ></input>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className={classes.preview__doc}>
        <h2>Preview Document</h2>
        <PdfSection urlFile={pdfFile} />
      </div>
    </>
  );
}

export default DocEditForm;
