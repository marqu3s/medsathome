const register = (req, res, next) => {
  const params = req.body;
  res.send(params);
};

export default register;
