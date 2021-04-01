import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function NavComponent() {
  const router = useRouter();

  let activeItem;
  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/count") {
    activeItem = "count";
  } else if (router.pathname === "/apitest") {
    activeItem = "apitest";
  }

  return (
    <Menu inverted>
      <Menu.Item
        name="home"
        active={activeItem === "home"}
        onClick={() => {
          router.push("/");
        }}
      />
      <Menu.Item
        name="카운트[동기] 예제"
        active={activeItem === "count"}
        onClick={() => {
          router.push("/count");
        }}
      />
      <Menu.Item
        name="상품리스트[비동기] 예제"
        active={activeItem === "product"}
        onClick={() => {
          router.push("/product");
        }}
      />
      <Menu.Item
        name="admin"
        active={activeItem === "admin"}
        onClick={() => {
          router.push("/admin");
        }}
      />
    </Menu>
  );
}
