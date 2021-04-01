import Head from "next/head";
import { Divider, Header, Loader } from "semantic-ui-react";
export default function Home() {
  return (
    <>
      {/* <>메타 태그를 담당</> */}
      <Head>
        <title>HOME | 이안</title>
        <meta name="description" content="이안 nextjs 테스트 사이트."></meta>
      </Head>
    </>
  );
}
