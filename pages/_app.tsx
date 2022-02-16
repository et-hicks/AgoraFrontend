import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from "../components/Sidebar";

// This is a perfect place to put the header and the sidebar
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <div style={{display: "flex",  flexDirection: "row", backgroundColor: "#FBF9FF"}}>
          <Sidebar />
          <div style={{ height: "98vh", width: "85vw"}}>
              <Component {...pageProps} />
        </div>
      </div>
  )
}

export default MyApp
