import React from "react";
import PdfSection from "../components/pdf/PdfSection";

import RatingStar from "../components/item/Rating/RatingStar";

import "../components/pdf/PdfSection.css";

function DisplayDoc() {
  return (
    <div className="document_view">
      <RatingStar />
      <div className="all_page_container">
        <PdfSection />
      </div>
    </div>
  );
}

export default DisplayDoc;
