import '@/src/styles/index.scss'
// import "@assets/css/brand.css"

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
