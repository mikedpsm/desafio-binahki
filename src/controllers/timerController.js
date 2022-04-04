const knex = require("../database/connection");

const getDailyProd = async (req, res) => {
  try {
    return res.status(200).json({});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getWeekTimer = async (req, res) => {
  try {
    return res.status(200).json({});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const getTimers = async (req, res) => {
  try {
    const timersQuery = await knex("timer");
    return res.status(200).json(timersQuery);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const postTimer = async (req, res) => {
  const { time, id, sample, startDay, endDay } = req.body;

  if (!time || !id) {
    return res.status(400).json({
      message: "Data missing. No timer seconds or identification detected.",
    });
  }

  try {
    const newTimer = {
      activity: id,
      samplenumber: sample,
      timeactive: time,
      startday: startDay,
      endday: endDay,
    };

    await knex("timer").insert(newTimer).returning("*");
    return res.status(201).json({ message: "New timer saved." });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const patchTimer = async (req, res) => {
  try {
    return res.status(200).json({});
  } catch (error) {
    console.log(error.message);
  }
};

const deleteTimer = async (req, res) => {
  try {
    return res.status(200).json({});
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDailyProd,
  getWeekTimer,
  getTimers,
  postTimer,
  patchTimer,
  deleteTimer,
};
