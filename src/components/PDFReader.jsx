import React from "react";

const PDFReader = ({ pdf }) => {
  return (
    <div className="pdf-reader">
      <h2>{pdf.name}</h2>
      <p>{pdf.author ? `Author: ${pdf.author}` : "Author: Unknown"}</p>
      <p>{pdf.published ? `Published: ${pdf.published}` : "Published: Unknown"}</p>
      <div><a className="link" href={pdf.link} target="_blank" rel="noopener noreferrer">Read PDF</a></div>
    </div>
  );
};

export default PDFReader;
