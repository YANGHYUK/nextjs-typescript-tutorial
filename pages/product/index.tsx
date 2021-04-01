import Axios from "axios";
import React, { useState, useEffect } from "react";
import withHead from "components/hoc/withHead";
import ItemList from "components/ItemList";
import { Loader } from "semantic-ui-react";
function productPage({ list }) {
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
  if (list.length) {
    return <ItemList list={list} />;
  }
  return <div>상품 없음</div>;
}

export async function getStaticProps() {
  const apiUrl = process.env.apiUrl;
  const res = await Axios.get(apiUrl);
  const data = res.data;

  return {
    props: {
      list: data,
      name: process.env.name,
    },
  };
}

export default withHead(productPage, "상품리스트", "상품리스트 페이지 입니다");
