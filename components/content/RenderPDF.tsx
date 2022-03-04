import React, {Component, useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import dynamic from "next/dynamic";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function RenderPDF() {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
    }
    const path = "/Quokka.pdf";
    console.log(path)
    return (
        <div>
            <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
            {/*<img src={path} />*/}
        </div>
    );

    // return (
    //     <div id="example1" style={{
    //         height: "30rem",
    //         border: "1rem solid rgba(0,0,0,.1)"
    //     }}>
    //        live reloading
    //     </div>
    // );
}