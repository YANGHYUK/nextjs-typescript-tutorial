export default (req, res) => {
  // res.statusCode = 200;
  // res.json({ name: null });

  if (req.method === "POST") {
    const { id, password } = req.body;
    res.setHeader("Set-Cookie", `a_name=${id};Max-Age=3600;HttpOnly,Secure`);
    res.statusCode = 200;
    res.json({ message: "ok" });
  }
};
