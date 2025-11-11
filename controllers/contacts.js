const { ObjectId } = require('mongodb');
const db = require('../db/connect');

const getAll = async (req, res) => {
  try {
    const result = await db.getDb().collection('contacts').find();
    result.toArray().then((contacts) => {
      res.status(200).json(contacts);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await db.getDb().collection('contacts').find({ _id: userId });
    result.toArray().then((contacts) => {
      res.status(200).json(contacts[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, getSingle };
