"use client";

import React from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { IoMdDownload } from "react-icons/io";

const DownloadPDFButton = () => {
  const downloadPDF = async () => {
    const input = document.body;
    const downloadButton = document.getElementById("download-button");

    if (downloadButton) {
      downloadButton.style.display = "none";
    }

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();

    const imgWidth = pdf.internal.pageSize.getWidth();
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

    pdf.save("my_page.pdf");

    if (downloadButton) {
      downloadButton.style.display = "block";
    }
  };

  return (
    <button
      id="download-button"
      onClick={downloadPDF}
      className=" bg-gray-800 text-white   "
    >
      <IoMdDownload size={25} />
    </button>
  );
};

export default DownloadPDFButton;
