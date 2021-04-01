import React, { useState, useEffect } from "react";
import Axios from "axios";
import Head from "next/head";

import withHead from "components/hoc/withHead";
import Item from "components/ItemList/Item";
import { Loader } from "semantic-ui-react";
function idPage({ item, name }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <Loader active inline="centered">
        Loading
      </Loader>
    );
  }
  return (
    <>
      {item && (
        <>
          <Head>
            <title>상품리스트 - {item.name}</title>
            <meta name="description" content={item.description}></meta>
          </Head>
          {name} 환경 입니다.
          <Item item={item} />
        </>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      item: data,
      name: process.env.name,
    },
  };
}

export default idPage;
