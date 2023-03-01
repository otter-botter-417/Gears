const mongoose = require("mongoose");

const itemDatasSchema = new mongoose.Schema({
  itemDatas: {
    category: {
      type: String,
      required: true,
    },

    itemName: {
      type: String,
      required: true,
    },
    brandName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    asin: {
      type: String,
      required: true,
    },
    amazonUrl: {
      type: String,
      required: true,
    },
    itemAbility: {
      openSize: {
        wide: Number,
        depth: Number,
        high: Number,
      },
      storageSize: {
        wide: Number,
        depth: Number,
        high: Number,
      },
      weight: Number,
      capacity: Number,
      innerTent: String,
      grandSheet: String,
      accessories: [],
      colors: [],
      tags: [],
    },
  },
});

module.exports = mongoose.model("itemDatas", itemDatasSchema);
