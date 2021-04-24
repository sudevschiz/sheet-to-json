const { task, fetchData, writeData } = require('../lib')
const c = require('../lib/constants');

(async function main() {
  console.log('Running task on start...')
  console.log(c.SHEET)

  await task({
    sheet: c.SHEET,
    tabs: { oxygen_concentrator_form_responses : c.SHEET_FORM_RESPONSES },
    file: c.FILE_FORM_RESPONSES
  })

  console.log('End of sheet-to-json_generic')
})()