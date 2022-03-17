import '../styles/globals.css'
// import { DataContext } from '../utils/DataContext';


function MyApp({ Component, pageProps }) {

  return (

    // <DataContext.Provider>

      <Component {...pageProps} />
    // </DataContext.Provider>


  )

  
}

export default MyApp
