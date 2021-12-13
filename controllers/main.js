const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongo
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  console.log(username, password);
  res.send('Fake login/register/signup route');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, John`,
    secret: `Your authorized data --> lucky number: ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
