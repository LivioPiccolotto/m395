const mongoose = require('mongoose')

const CvDataSchema = new mongoose.Schema(
	{
		vorname: { type: String, required: true },

        nachname: { type: String, required: true },

		alter: { type: Int8Array, required: true },

        beruf: { type: String, required: true },

        hobbys: { type: String, required: true },

        staerken: { type: String, required: true },

        ausbildung: { type: String, required: true },
	},
	{ collection: 'CvData' }
)

const model = mongoose.model('CvDataSchema', CvDataSchema)

module.exports = model