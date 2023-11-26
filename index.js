const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/saveData', (req, res) => {
  const inputData = req.body.data; // Thay 'data' bằng tên trường trong form input của bạn
  fs.appendFile('data.txt', inputData + '\n', (err) => {
    if (err) throw err;
    console.log('Dữ liệu đã được lưu vào tệp.');
    res.send('Dữ liệu đã được lưu vào tệp.');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
