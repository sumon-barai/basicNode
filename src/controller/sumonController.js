const home = (req, res) => {
  res.send("Hello World!");
};

const upload = (req, res) => {
  res.send("this is post route");
};

module.exports = { home, upload };
