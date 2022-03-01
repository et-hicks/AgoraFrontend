import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from "../components/Sidebar";
import { Provider } from 'react-redux'
import store from "../app/store";

// This is a perfect place to put the header and the sidebar
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Provider store={store}>
          <div style={{display: "flex",  flexDirection: "row", backgroundColor: "#FBF9FF", height: "100vh"}}>
              <Sidebar />
              <div style={{ height: "99vh", width: "85vw"}}>
                  <Component {...pageProps} />
            </div>
          </div>
      </Provider>
  )
}

export default MyApp
