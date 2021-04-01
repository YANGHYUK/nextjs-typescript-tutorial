export default (req, res) => {
  if (req.method === "GET") {
    const cookies = req.cookies;
    const id = cookies["a_name"];
    res.statusCode = 200;
    res.json({ message: "ok", id });
  }
};
