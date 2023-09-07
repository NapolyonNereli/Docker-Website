const superUserService = require("../services/superUser");

exports.superUser = async (req, res) => {
  const { pass } = req.body;
  try {
    const superUser = await superUserService.superUser(pass);
    res.status(200).send(superUser);
  } catch (error) {
    console.log(error);
  }
};
