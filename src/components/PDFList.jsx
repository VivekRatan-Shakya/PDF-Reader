import React from "react";

const PDFList = ({ pdfs, onSelect }) => {
  return (
    <div className="pdf-list">
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf-item" onClick={() => onSelect(pdf)}>
          <h3>{pdf.name}</h3>
          <p>{pdf.author ? `Author: ${pdf.author}` : "Author: Unknown"}</p>
          <p>{pdf.published ? `Published: ${pdf.published}` : "Published: Unknown"}</p>
        </div>
      ))}
    </div>
  );
};

export default PDFList;
