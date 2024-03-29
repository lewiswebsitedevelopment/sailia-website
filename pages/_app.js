import '../styles/globals.css'
import Script from 'next/script' 
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Script src="https://plausible.io/js/script.js" />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
