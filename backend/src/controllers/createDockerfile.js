const dockerFileService = require("../services/createDockerfile");

exports.createDockerfile = async (req, res) => {
  const { from, workdir, copy, run, cmd, expose } = req.body;

  try {
    const createDockerfile = await dockerFileService.createDockerfile(
      from,
      workdir,
      copy,
      run,
      cmd,
      expose
    );
    res.status(200).send(createDockerfile);
  } catch (error) {
    console.log("createDockerfile Controllers Errror: ", error);
  }
};

// controllers/createDockerfile.js

exports.downloadDockerfile = async (req, res) => {
  try {
    const data = await dockerFileService.downloadDockerfile();
    res.setHeader('Content-disposition', 'attachment; filename=Dockerfile');
    res.setHeader('Content-type', 'text/plain');
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error reading Dockerfile' });
  }
};

