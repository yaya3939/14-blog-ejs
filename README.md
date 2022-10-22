## 学了啥

### 10/21

- 有问题一定要先看文档，找相关的 tag 的信息。
  ejs 里的 include，要怎么使用 views 子文件夹里的文件
- array.forEach(function(element) { })
- nodemon 只有在 js 文件做改动的时候才会自动重启
- express 的 route parameters
- array 里是 number/sring 时的元素查询方法：indexOf()，includes();
  array 里是 object 时，查询各个 object 里的元素的方法：some();

### 10/22

- 使用 lodash 解决 url 的大小写和—问题
- css 和 js 的不同的显示有限字符的方式
  css：display,white-space,width,text-overflow...
  js：substring()
- 怎么把 title 转变为 url 形式：
  .toLowerCase().replace(" ","-")
  join():一个 array 的 method，我一直用在 string 上就一直出错
  最后其实没有用上。因为在 app.js 的"posts..."那个 route 里，不管你 type 的 title 是什么样式的，在 function 里其实已经通过 lodash 格式化了，所以不需要在意 type title 的形式，而我完全没有注意到，所以花了很多时间在 ejs 里 format route
- 为了更好地理解代码逻辑，一定要给变量起最准确最贴合逻辑的名字，并且不要有重复

## 问题

- √ header.ejs&footer.ejs 里的标签老是自动补足，让我的 body 外观出了点问题。
  sulotion: disable format on save
- √ footer 会出现在可视页面的最低端，即使是 posts 已经超出可视页面了，所以 footer 会杠在 posts 之间。
  solution：把 footer padding div 去掉，改变 footer 的 position。为了美观还改了一些<p>的 padding 和 footer 的 margin
