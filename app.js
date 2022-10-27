const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/postDB");

//datas
const homeStartingConten =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit enim, diam iaculis vitae turpis dis aliquam ex scelerisque fames, cubilia habitant magna penatibus feugiat fusce dictumst. Porttitor blandit lacinia cras neque habitasse ex egestas suscipit, platea class sollicitudin magnis duis auctor tempus, ipsum fames laoreet eget cursus litora hac. Orci elementum mi ut arcu nec nulla habitasse, potenti hac duis curae venenatis convallis, primis faucibus semper massa scelerisque dictum. Ligula scelerisque maecenas habitasse risus dignissim platea pretium velit feugiat ullamcorper, non nunc blandit dui arcu ridiculus conubia tortor tempus vel ut, cubilia quam suscipit vestibulum est justo dictum mattis mus. Iaculis et volutpat lectus nascetur arcu tempor maximus accumsan ridiculus, leo porttitor etiam viverra conubia est eros turpis, efficitur ex imperdiet fermentum feugiat pretium mi suspendisse.";
const aboutStartingConten =
  "Orci elementum mi ut arcu nec nulla habitasse, potenti hac duis curae venenatis convallis, primis faucibus semper massa scelerisque dictum. Ligula scelerisque maecenas habitasse risus dignissim platea pretium velit feugiat ullamcorper, non nunc blandit dui arcu ridiculus conubia tortor tempus vel ut, cubilia quam suscipit vestibulum est justo dictum mattis mus. Iaculis et volutpat lectus nascetur arcu tempor maximus accumsan ridiculus, leo porttitor etiam.";
const contactContent =
  "Yeros est litora commodo magna nec etiam vulputate, senectus turpis nam habitant duis nibh. Molestie cursus lectus risus aenean est dapibus ultricies sollicitudin dui netus, amet hac tempus tincidunt placerat luctus senectus a conubia, purus commodo suscipit elementum accumsan eros quis non maximus.";
//database's datas
const postSchema = new mongoose.Schema({ title: String, content: String });
const Post = mongoose.model("post", postSchema);

//gets
app.get("/", function (req, res) {
  Post.find({}, function (err, posts) {
    if (!err) {
      res.render("home", {
        startingContent: homeStartingConten,
        yourPosts: posts,
      });
    }
  });
});

app.get("/about", function (req, res) {
  res.render("about", { startingContent: aboutStartingConten });
});

app.get("/contact", function (req, res) {
  res.render("contact", { startingContent: contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.get("/posts/:typeTitle", function (req, res) {
  //change the type title from post.title to post._id
  const urlTtile = req.params.typeTitle;

  //use id & findById could make the code shorter and neadier
  Post.findById({ _id: req.params.typeTitle }, function (err, post) {
    if (!err) {
      res.render("post", {
        postTitle: post.title,
        postContent: post.content,
      });
    }
  });
});

//post
app.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.title,
    content: req.body.postContent,
  });
  post.save();

  res.redirect("/");
});

app.listen(3000, function () {
  console.log("server started on port 3000.");
});
