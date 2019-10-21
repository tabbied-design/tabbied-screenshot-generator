const express = require('express');
const cors = require('cors');
const path = require('path');
const fsPromises = require('fs').promises;

const { generateScreenshot } = require('./helpers/screenshot');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/generate', async (req, res) => {
  console.log('generate screenshot');
  console.log(req.body);

  const doodleTitle = req.body['doodle-title'];
  const doodleCode = req.body['doodle-code'];

  await fsPromises.writeFile('temp.html', doodleCode);

  await generateScreenshot(
    path.join(__dirname, 'temp.html'),
    doodleTitle,
    320,
    480,
    5,
  );

  return res.json({
    doodleTitle,
    doodleCode,
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
