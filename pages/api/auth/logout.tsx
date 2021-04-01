export default (req, res) => {
  let cookies = req.cookies;
  const id = cookies["a_name"];
  res.setHeader("Set-Cookie", `a_name=${id};Max-Age=-1;`); // 음수가 지정되면 그 즉시 만료됨./
  res.statusCode = 200;
  res.json({ message: "ok" });
};
