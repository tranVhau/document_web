import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

function PdfSection() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={{
        url: "http://res.cloudinary.com/dy9g317c9/image/upload/v1669030135/document_web/document/e1ljhjf2vlpcslfjztls.pdf",
      }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
}

export default PdfSection;
