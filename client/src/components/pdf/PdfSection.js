import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const PdfSection = React.memo(({ url }) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={{
        url: url,
      }}
      onLoadSuccess={onDocumentLoadSuccess}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
});

export default PdfSection;
