import React, {Component, useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// import styles from '../../styles/PDF/RenderPDF.module.scss'
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//
// const options = {
//     cMapUrl: 'cmaps/',
//     cMapPacked: true,
// };

const path = "/Quokka.pdf";

export default function RenderPDF() {

    const [file, setFile] = useState(path);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: any) {
        setNumPages(numPages);
    }
    function onFileChange(event: any) {
        setFile(event.target.files[0]);
    }
    console.log("0------------------------------------0", path)
    // return (
    //     <div className={styles.Example}>
    //         <header>
    //             <h1> POPULATION DYNAMICS O F THE QUOKKA, SETONIX BRACHYURUS,ON THE WEST END O F ROTTNEST I., WESTERN AUSTRALI </h1>
    //         </header>
    //         <div className={styles.Example__container}>
    //             {/*<div className="Example__container__load">*/}
    //             {/*    <label htmlFor="file">Load from file:</label>{' '}*/}
    //             {/*    <input onChange={onFileChange} type="file" />*/}
    //             {/*</div>*/}
    //             <div className={styles.Example__container__document}>
    //                 <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
    //                     {Array.from(new Array(numPages), (el, index) => (
    //                             <Page key={`page_${index + 1}`} pageNumber={index + 1} />
    //                     ))}
    //                 </Document>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div >
            <iframe src={path} style={{
                width: "48vw",
                height: "100%",
                // border: "3px solid pink"
            }}>...</iframe>
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