let posts=['POST1']
const Post=async()=>{

console.log(`Before creating posts ${new Date}`);
const updateUserActivityTime=await new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let updatedTime=new Date
        resolve(updatedTime)
    },1000)
})

const createPost=(post)=>new Promise((resolve,reject)=>{
  setTimeout(() => {
    posts.push(post);
    newPosts=posts;
    resolve(newPosts);
  }, 3000);
})



const deletePost=new Promise((resolve,reject)=>{
setTimeout(()=>{
posts.pop();
resolve(posts);
},4000)
})
let wait=await createPost('POST2');

console.log(`After creating posts ${wait}`);


let[updatedTimer,deletedPost] =await Promise.all([updateUserActivityTime,deletePost]) 
console.log(`Last active on ${updatedTimer}`);
console.log(`New posts of the user ${deletedPost}`);
}
Post()
