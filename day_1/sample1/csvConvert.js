const { parse } = require('json2csv');

const fields = ['field1', 'field2', 'field3'];
const opts = { fields };

var myData = [{'field1': 'abc', 'field2':'dda', 'field3' : 'sdks'},{'field1': 'abdd', 'field2':'dda', 'field3' : 'sdks'} ]
try {
  const csv = parse(myData, opts);
  console.log(csv);
} catch (err) {
  console.error(err);
}