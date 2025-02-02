"use strict";

const sn = require("./dataset/senegal.json");
const rg = require("./dataset/regions.json");

const { lowerCase, findItem } = require("./libs/utils");
const { RegionReferenceError } = require("./libs/exceptions.js");

module.exports = {
  //* Get all data about region.
  rg: () => rg,

  //* Get all regions names.
  regions: () => {
    return rg.map((region) => region.nom);
  },

  //* Get all regions code.
  codes: () => {
    return rg.map((region) => region.code);
  },

  //* Get departments by region.
  departments: (regionName) => {
    regionName = lowerCase(regionName);

    if (regionName.length == 0) {
      throw new RegionReferenceError();
    }

    const { departments } = findItem(regionName);
    return departments;
  },

  //* Get populations by region.
  population: (regionName) => {
    regionName = lowerCase(regionName);

    if (regionName.length == 0) {
      throw new RegionReferenceError();
    }

    const { population } = findItem(regionName);
    return population;
  },

  //* Get area by region.
  superficie: (regionName) => {
    regionName = lowerCase(regionName);

    if (regionName.length == 0) {
      throw new RegionReferenceError();
    }

    const { superficie } = findItem(regionName);
    return superficie;
  },

  //* Get all data about Senegal.
  sn: () => sn,

  //* Get all national language.
  languesNationales: () => sn.languesNationales,
};
