import React, { useEffect, useState } from "react";
import Select from "react-select";

import DocumentItem from "../document-sample/DocumentItem";
import PdfSection from "../pdf/PdfSection";

import classes from "../../../pages/asset/css/NewDocPage.module.css";

function DocUpdateForm(props) {
  const [inputData, setInputData] = useState(props.initDocData);
  const [pdfFile, setPdfFile] = useState(props.initDocData.src);

  useEffect(() => {
    setInputData(props.initDocData);
    setPdfFile(props.initDocData.src);
  }, [props.initDocData]);

  useEffect(() => {
    props.setData(inputData);
  }, [inputData, props]);

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
        thumbnail: require("../../../pages/asset/img/defaultThumnail.png"),
      };
    });
  };
  return (
    <>
      <div className={classes.new_doc}>
        <div className={classes.preview_section}>
          <h2>Preview Document Tag</h2>
          <DocumentItem
            postData={inputData}
            // author={props.initDocData}
          />
        </div>
        <div className={classes.input_section}>
          <form className={classes.doc_form_info}>
            <div className={classes.doc_section}>
              {props.pending ? <h2>Preliminary Edit </h2> : <h2>Document</h2>}
              <div>
                <label>Name</label>
                <input
                  placeholder="Document Name..."
                  className={classes.author_name_input}
                  name="name"
                  type={"text"}
                  defaultValue={props.initDocData.name}
                  onChange={formInputHandler}
                ></input>
              </div>
              {/* <div>
                <label>Thumbnail</label>
                <input
                  name="thumbnail"
                  type={"file"}
                  onChange={inputIMGHandler}
                ></input>
              </div> */}
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
                  defaultValue={props.initDocData.desc}
                  onChange={formInputHandler}
                ></textarea>
              </div>
              {!props.pending && (
                <div>
                  <label>File</label>
                  <input
                    name="src"
                    type={"file"}
                    onChange={inputPDFHandler}
                    className={classes.uploadbtn}
                  ></input>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <div>
        <h2>Preview Document</h2>
        <PdfSection urlFile={pdfFile} />
      </div>
    </>
  );
}

export default DocUpdateForm;
