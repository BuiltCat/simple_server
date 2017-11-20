# simple_server
简单的小服务器
## 启动服务器
```
npm index.js
```
## post请求添加用户
- 127.0.0.1/user
- 数据格式
```
    {
      name: '',
      age：0，
      course: 0,
      grade: 0
    }
```
## get请求获取用户
- 127.0.0.1/user
- 返回格式
```
  [
    {
        "name": "老张",
        "age": "12",
        "course": "1550422",
        "course": "15"
    },
    {
        "name": "老王",
        "age": "1552",
        "course": "1550422",
        "course": "15"
    }
]
```
