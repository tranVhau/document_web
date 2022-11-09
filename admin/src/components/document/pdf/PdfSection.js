import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "./PdfSection.css";

function PdfSection(props) {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // console.error(props.urlFile);

  return (
    <div className="doc_wrapper">
      <div className="all_page_container">
        <Document
          file={{
            url: props.urlFile,
          }}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
}

export default PdfSection;
