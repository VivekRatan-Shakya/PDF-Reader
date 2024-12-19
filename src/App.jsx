import React, { useState, useEffect } from "react";
import PDFList from "./components/PDFList";
import PDFReader from "./components/PDFReader";
import "./App.css";

const App = () => {
  const [pdfs, setPdfs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Default search query

   console.log(import.meta.env.VITE_API)

  // Fetch PDF data from the API
  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const response = await fetch("https://api.npoint.io/dee51ea017d20efdfcc8");
        const data = await response.json();
        setPdfs(data);
      } catch (error) {
        console.error("Error fetching PDF data:", error);
      }
    };

    fetchPdfs();
  }, []);

  // Filter the PDFs based on the search query
  const filteredPdfs = pdfs.filter(pdf =>
    pdf.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      {/* Search bar */}
      <h1>Seach Via Name</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search PDFs"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update search query
        />
      </div>

      <div className="content">

         {/* PDF list with search query */}

        <PDFList pdfs={filteredPdfs} onSelect={setSelectedPdf} />

        {selectedPdf && <PDFReader pdf={selectedPdf} />}
      </div>
    </div>
  );
};

export default App;
