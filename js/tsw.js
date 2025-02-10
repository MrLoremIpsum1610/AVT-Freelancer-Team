let users = {
    "ali" :{user:'ali',num:123,phone:456},
    "mohammad" :{user:'mhm',num:125,phone:789},
    "johan":{user:'johan',num:145,phone:465}
}
Object.keys(users).forEach(user=> {
    console.log(user+":"+users[user])
});