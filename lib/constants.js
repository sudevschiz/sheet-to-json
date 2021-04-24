const SHEET = process.env.OXYGEN_REQUIREMENT
const DIR = './tmp/'
// Sheet IDs can be obtained here: https://spreadsheets.google.com/feeds/worksheets/<HIDDEN>/private/full
const SHEET_FORM_RESPONSES = 'oevlts2'
const FILE_FORM_RESPONSES = '/oxygen_concentrator_form_responses.json'

module.exports = {
    DIR,
    SHEET,
    SHEET_FORM_RESPONSES,
    FILE_FORM_RESPONSES,
  }