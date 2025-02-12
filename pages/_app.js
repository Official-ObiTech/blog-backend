import "@/styles/globals.css";
import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import Aos from "@/components/Aos";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <SessionProvider session={session}>
        {loading ? (
          <div className="flex flex-col flex-center wh_100">
            <h1>Loading....</h1>
          </div>
        ) : (
          <>
            <div>
              <Header />
              <SideBar />
            </div>
            <main>
              <Aos>
                <Component {...pageProps} />
              </Aos>
            </main>
          </>
        )}
      </SessionProvider>
    </>
  );
}
