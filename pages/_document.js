import { Html, Head, Main, NextScript } from 'next/document'
import bg from "@/public/pattern.jpg"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{
        backgroundImage: bg.src
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
