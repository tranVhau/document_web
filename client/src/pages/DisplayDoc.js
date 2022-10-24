import React from "react";
import PdfSection from "../components/pdf/PdfSection";

import PDFInfo from "../components/pdf/PDFInfo";
import RatingStar from "../components/item/Rating/RatingStar";

import "../components/pdf/PdfSection.css";

function DisplayDoc() {
  return (
    <div className="document_view">
      <PDFInfo />
      <RatingStar />
      <div className="all_page_container">
        <PdfSection />
      </div>
    </div>
  );
}

export default DisplayDoc;
