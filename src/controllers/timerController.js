const knex = require("../database/connection");

// const getDailyProd = async (req, res) => {};
// const getWeekTimer = async (req, res) => {};
// const getTimers = async (req, res) => {};

const postTimer = async (req, res) => {
  const { time, id, sample } = req.body;

  if (!time || !id) {
    return res.status(400).json({
      message: "Data missing. No timer seconds or identification detected.",
    });
  }

  const newTimer = {
    activity: id,
  };

  await knex("timer").insert;

  return res.status(201).json({ message: "New timer saved." });
  try {
  } catch (error) {
    console.log(error.message);
  }
};

// const patchTimer = async (req, res) => {};
// const deleteTimer = async (req, res) => {};

module.exports = {};
