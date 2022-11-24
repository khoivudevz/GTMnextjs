import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TagManager, {TagManagerArgs} from "react-gtm-module"
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const tagManagerArgs = {
    gtmId: 'GTM-NGH4JNT'
}

TagManager.initialize(tagManagerArgs)



// const gtmId = "GTM-NGH4JNT"

// const tagManagersArgs: TagManagerArgs ={
//   gtmId
// }

// useEffect(() =>{
//   TagManager.initialize(tagManagersArgs)
// },[])

  return <Component {...pageProps} />
}
