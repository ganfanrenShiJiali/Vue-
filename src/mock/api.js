//定义mock文件
import Mock from 'mockjs'

const userList = {
    "data": [{
            "id|10001-11000": 0,
            // "num": 0,
            "username": "jack",
            "password": "123456",
            "email": "admin@51purse.com",
            "phone": null,
            "role": 0,
            "createTime": 1479048325000,
            "updateTime": 1479048325000
        },
        {
            "id|10001-11000": 0,
            // "num": 1,
            "username": "admin",
            "password": "admin",
            "email": "admin@51purse.com",
            "phone": null,
            "role": 0,
            "createTime": 1479048325000,
            "updateTime": 1479048325000
        },
        {
            "id|10001-11000": 0,
            // "num": 2,
            "username": "momo",
            "password": "5629357zzk",
            "email": "admin@51purse.com",
            "phone": null,
            "role": 0,
            "createTime": 1479048325000,
            "updateTime": 1479048325000
        },
    ]
}
Mock.mock('/api/user/login', 'post', (req) => {
    // "status": 0,
    // "data": {
    //     "id|10001-11000": 0,
    //     "username": "@cname",
    //     "email": "admin@51purse.com",
    //     "phone": null,
    //     "role": 0,
    //     "createTime": 1479048325000,
    //     "updateTime": 1479048325000
    // }
    const { password, username } = JSON.parse(req.body)
    for (let num = 0; num < userList.data.length; num++) {
        //判断userList中是否存在该用户并且用户密码是否正确
        if (username === userList.data[num].username && password === userList.data[num].password) {
            return {
                status: 0,
                data: userList.data[num]
            }
        }
    }
    return {
        status: 20,
        msg: "您的账号或密码错误！"
    }
});
Mock.mock('/api/user/register', 'post', (req) => {
    const { password, username } = JSON.parse(req.body);
    var arr = {
        "id|10001-11000": 0,
        "username": username,
        "password": password,
        "email": "admin@51purse.com",
        "phone": null,
        "role": 0,
        "createTime": 1479048325000,
        "updateTime": 1479048325000
    };
    userList.data.push(arr);
    return {
        status: 20,
        msg: "恭喜您注册成功!"
    }
});