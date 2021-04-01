import Axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Button, Form } from "semantic-ui-react";

export default function Login() {
  const router = useRouter();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  function login(data) {
    Axios({ method: "post", url: "/api/auth/login", data: data }).then(
      (res) => {
        if (res.status === 200) {
          //로그인 성공
          router.push("/admin");
        }
      }
    );
  }
  return (
    <div style={{ padding: "100px 0", textAlign: "center" }}>
      <Form>
        <Form.Field inline>
          <input
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Field>
        <Form.Field inline>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button color="blue" onClick={() => login({ id, password })}>
          Login
        </Button>
      </Form>
    </div>
  );
}
