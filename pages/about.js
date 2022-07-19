import Footer from "../components/Footer"
import Head from "next/head"
export default function about() {
    return (
        <> <Head> <title>About CodeVolution
        </title>
        <meta name='description' content='Free tuto on web dev'/></Head>
  <h1 className='content'> About</h1> </>)
  }
  about.getLayout = function PageLayout(page) {
    return ( <>
    {page}
    <Footer/> </>)  
  } 