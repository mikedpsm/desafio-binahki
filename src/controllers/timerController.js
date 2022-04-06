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
  const { time, id, startDay, endDay, sample } = req.body;

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

    await knex("timer").insert(newTimer);
    return res.status(201).json({ message: "New timer saved.", newTimer });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const patchTimer = async (req, res) => {
  const { time, id, startDay, endDay, sample } = req.body;

  if(!time){
    return res.status(400).json({message: "Time input is mandatory."});
  }

  try {
    const updateTimer = await knex("timer").where({id}).update({
      activity: id,
      samplenumber: sample,
      timeactive: time,
      startday: startDay,
      endday: endDay,
    });
    return res.status(200).json("Timer updated.");
  } catch (error) {
    console.log(error.message);
  }
};

const deleteTimer = async (req, res) => {
  const { id } = req.body;

  try {
    const deleteQuery = await knex("timer").where({ id }).del();
    return res.status(200).json({ deleteQuery });
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
