const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require('fs');
const users = require("./data/users.json");
const app = express();
const stories = require("./data/stories.json");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/auth/register",async (req, res) => {
  const data = req.body;
  const { username, password } = data;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    return res.status(400).json({
      
      message: "Tên đăng nhập đã tồn tại",
    });
  }

  delete data.confirm_password;
  const newData =await addData(data, users, "./data/users.json");
  res.status(200).json(newData);
});

app.post("/auth/login", (req, res) => {
  const data = req.body;
  const { username, password } = data;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) {
    return res.status(400).json({
      message: "Tài khoản hoặc mật khẩu không đúng",
    });
  }
  res.status(200).json(user);
});

app.get('/stories', (req, res) => {
  res.status(200).json(stories);
});

app.get('/stories/preview/:id', (req, res) => {
  const { id } = req.params;
  const story = stories.find((story) => {
    return story.id === id
  })
  if (!story) {
    return res.status(404).json({
      message: "Không tìm thấy truyện",
    });
  }
  res.status(200).json(story);
});

const addData = async (data, collection, filePath) => {
    const newData = {
        ...data,
        picture:
          "https://i.pinimg.com/564x/ac/1a/da/ac1ada914c51dc1543778ff4502db9b7.jpg",
      }
      collection.push(newData);
  fs.writeFileSync(filePath,JSON.stringify(collection), 'utf8')
  return newData;
};

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
