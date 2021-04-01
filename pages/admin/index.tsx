import Axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

export default function Admin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);

  function checkLogin() {
    Axios({ method: "get", url: "/api/auth/isLogin" }).then((res) => {
      if (res.status === 200 && res.data.id) {
        //로그인
        setIsLogin(true);
      } else {
        //로그인 안됨
        router.push("/login");
      }
    });
  }

  function logout() {
    Axios.get("/api/auth/logout").then((res) => {
      if (res.status === 200) {
        router.push("/login");
      }
    });
  }

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <>
      admin
      {isLogin && <Button onClick={logout}>Logout</Button>}
    </>
  );
}
