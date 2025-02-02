const rg = require("../dataset/regions.json");

const lowerCase = (value) => value.toLowerCase().trim();

const findItem = (value) => {
	const region = rg.find(
		(region) => lowerCase(region.nom) === lowerCase(value)
	);

	if (region === undefined) throw new RegionReferenceError();

	return region;
}

module.exports = { lowerCase, findItem };