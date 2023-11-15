import { Noto_Sans, Noto_Sans_JP, Noto_Nastaliq_Urdu } from "next/font/google"

import styles from "app/main.module.scss";
import "app/main.scss";

export const metadata = {
  title: 'フレスコ catering servie',
  description: '有限会社フレスコカンパニーが展開するケータリングサービスです',
}

const NotoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "800"],
  display: "swap"
})

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <main className={`${styles.wrapper} ${NotoJP.className}`} >
          {children}
        </main>
      </body>
    </html>
  )
}
