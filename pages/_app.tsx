import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from "../components/Sidebar";

// This is a perfect place to put the header and the sidebar
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Sidebar />
          <div className="agoraPages">
              <Component {...pageProps} />
          </div>
      </>
  )
}

export default MyApp
