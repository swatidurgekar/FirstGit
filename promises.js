let posts=['POST1']

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const updatedTime=new Date;
            resolve(updatedTime);
        },1000);
    })
}

function createPost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
            resolve(posts)
        },1000)
    })
}

function deletePost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.pop();
            resolve(posts)
        },1000)
    })
}

console.log(`Before creating post ${new Date}`)
createPost('POST2')
.then((arr)=>{
    console.log(`After creating post ${arr}`);
})
.then(()=>{
    updateLastUserActivityTime().then((time)=>{
        console.log(`user last activity time ${time}`);
    })
    .then(()=>{
        deletePost()
        .then((afterwards)=>{
            console.log(`New set of posts of the user ${afterwards}`)
        })
    })
})