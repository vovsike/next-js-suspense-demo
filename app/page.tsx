import {Suspense} from "react";
import FastComponent from "@/app/_components/FastComponent";
import SlowComponent from "@/app/_components/SlowComponent";
import Loading from "@/app/loading";

export default async function Home() {
  return (
      <>
        <FastComponent/>
        <Suspense fallback={<Loading/>}>
          <SlowComponent/>
        </Suspense>
      </>
  )
}
