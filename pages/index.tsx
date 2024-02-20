import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "400",
});

import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import SectionProvider from "../context/LinkContext";

import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div style={{ marginTop: "100px" }}>
      <div
        className={styles.logo_container}
        style={{
       
        }}
      >
        <Image src="/logo.png" alt="logo" width={120} height={52} />
      </div>
      <div className={`app-container ${roboto.className}`}>
        <SectionProvider>
          <Sidebar />
          <Main />
        </SectionProvider>
      </div>
    </div>
  );
}
