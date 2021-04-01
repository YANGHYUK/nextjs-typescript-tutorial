import React from "react";
import { Header } from "semantic-ui-react";
import NavComponent from "./Nav";
export default function TopComponent() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <Header as="h1">Nextjs test</Header>
      </div>
      <NavComponent />
      {/* <Gnb /> */}
    </div>
  );
}
