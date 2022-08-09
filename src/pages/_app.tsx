/* eslint-disable react/jsx-props-no-spreading */
// import { DefaultSeo } from "next-seo";
// import type { AppProps } from "next/app";
// import Head from "next/head";

// import defaultSEOConfig from "../../next-seo.config";
// import { Chakra } from "lib/components/Chakra";
// import Layout from "lib/layout";
// import "lib/styles/globals.css";

// const MyApp = ({ Component, pageProps }: AppProps) => {
//   return (
//     <Chakra>
//       <Head>
//         <meta
//           name="viewport"
//           content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
//         />
//       </Head>
//       <DefaultSeo {...defaultSEOConfig} />
//       <Layout>
//         <Component {...pageProps} />
//       </Layout>
//     </Chakra>
//   );
// };

export default MyApp;

// THIS IS THE CHAKRA UI NE
import * as React from "react";
// 1. import 'ChakraProvider' component
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  // 2. Use at the root of your app
  return (
    <ChakraProvider>
      <App />
    </ChakraProvider>
  );
}
