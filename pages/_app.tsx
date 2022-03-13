import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from "../components/Sidebar";
import { Provider } from 'react-redux'
import store from "../app/store";
import dynamic from "next/dynamic";
// import RenderPDF from "../components/attachments/RenderPDF";

// const RenderPDF = dynamic(import("../components/attachments/RenderPDF"), {ssr: false})

// This is a perfect place to put the header and the sidebar
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <div style={{display: "flex",  flexDirection: "row", backgroundColor: "#FBF9FF", height: "100vh"}}>
              <Sidebar />
               {/*<div style={{ height: "99vh", width: "85vw"}} >*/}
              <div >
                  <Component {...pageProps} />
            </div>
          </div>
      </Provider>
  );
  //   return (
  //       <RenderPDF />
  //   );
}

export default MyApp
