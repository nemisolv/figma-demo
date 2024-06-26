const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
let users = require("./data/users.json");
const app = express();
let stories = require("./data/stories.json");
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.post("/auth/register", async (req, res) => {
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
  const newData = await addData(data, users, "./data/users.json");
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

app.get("/stories", (req, res) => {
  if (stories.length === 0) {
    res.status(204).json({ message: "Danh sách truyện rỗng" });
  } else {
    res.status(200).json(stories);
  }
});

app.get("/stories/preview/:id", (req, res) => {
  const { id } = req.params;
  const story = stories.find((story) => {
    return story.id === id;
  });
  if (!story) {
    return res.status(404).json({
      message: "Không tìm thấy truyện",
    });
  }
  res.status(200).json(story);
});

// stories

app.get('/stories/:id', (req,res) => {
  const {id} = req.params;
  const story = stories.find(story => story.id ===Number(id) );

  if(story) {
    return res.status(200).json(story);
  }
  return res.status(204).json({message: 'Could not find any story with id: ', id});
})

app.post("/stories", (req, res) => {
  const data = req.body;
  delete data.thumbnail;

  data.id = Number(getLastId()) +1;
  data.chap = Number(data.chap)
  stories.push(data);
  fs.writeFileSync("./data/stories.json", JSON.stringify(stories), "utf8");

  return res.status(200).json({ message: "ok" });
});

app.put('/stories/:id',(req, res) => {
  const {id} = req.params;
  const updateStory = req.body
  if(updateStory) {
    stories = stories.map(story => story.id === Number(id) ? updateStory : story );
    fs.writeFileSync("./data/stories.json", JSON.stringify(stories), "utf8");
    res.status(204).json({message: 'update story successfully!'})
  }else {
    res.status(404).json({message: 'Could not find any story with id: ', id});
  }
})

app.delete("/stories/:id", (req, res) => {
  const { id } = req.params;
  console.log("🚀 ~ app.delete ~ id:", id)
  stories = stories.filter(story => story.id !== Number(id));
  fs.writeFileSync("./data/stories.json", JSON.stringify(stories), "utf8");

  return res.status(200).json({
    message: 'delete story successfully'
  })
});

const addData = async (data, collection, filePath) => {
  const newData = {
    ...data,
    picture:
      "https://i.pinimg.com/564x/ac/1a/da/ac1ada914c51dc1543778ff4502db9b7.jpg",
  };
  collection.push(newData);
  fs.writeFileSync(filePath, JSON.stringify(collection), "utf8");
  return newData;
};

const getLastId = () => {
  if(stories.length ===0) return 0;
  else return stories[stories.length-1].id ;
}


app.get("/accounts", (req, res) => {
  if (users.length === 0) {
    res.status(204).json({ message: "Danh sách tài khoản rỗng" });
  } else {
    res.status(200).json(users);
  }
});

app.get("/accounts/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === Number(id));
  if (!user) {
    return res.status(404).json({
      message: "Không tìm thấy tài khoản",
    });
  }
  res.status(200).json(user);
});

app.delete("/accounts/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  fs.writeFileSync("./data/users.json", JSON.stringify(users), "utf8");
  return res.status(200).json({
    message: "Xóa tài khoản thành công",
  });
});





















app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
