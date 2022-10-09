import type { AppProps } from 'next/app'
import { Center, ChakraProvider, extendTheme, Spinner } from '@chakra-ui/react'
import { theme as chakraTheme } from "@chakra-ui/pro-theme";

const theme = extendTheme(
  {
    colors: { ...chakraTheme.colors, brand: chakraTheme.colors.blue },
  },
  chakraTheme
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
