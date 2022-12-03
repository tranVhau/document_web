import React, { useEffect, useState } from "react";

import { getDocument } from "../store/actions/documentAction";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import PdfSection from "../components/pdf/PdfSection";
import PDFInfo from "../components/pdf/PDFInfo";
import RatingStar from "../components/item/Rating/RatingStar";

import "../components/pdf/PdfSection.css";
import { unwrapResult } from "@reduxjs/toolkit";
import moment from "moment";

function DisplayDoc() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [document, setDocument] = useState([]);
  const fetchDocumentData = async () => {
    setDocument(...unwrapResult(await dispatch(getDocument(id))));
  };
  useEffect(() => {
    fetchDocumentData();
  }, []);

  console.log(moment(moment()).diff(moment(), "hours"));

  return (
    <div className="document_view">
      <PDFInfo document={document} />
      <RatingStar />
      <div className="all_page_container">
        <PdfSection url={document.src} />
      </div>
      <div></div>
    </div>
  );
}

export default DisplayDoc;
