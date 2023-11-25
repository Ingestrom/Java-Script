//Object literals
//const Blogs = [
//    {title: 'why segments hurt in the butt', Likes: 19720, Author: "You don't need to know" },
//    {title:'10 tips to hire a segments sniper', Likes: 1090128, Author: "Same as before"}
//];

let user = {
    name: 'nigger',
    age : 30,
    email: 'niggerForlife@thesegmentssniper.co.jp',
    location: 'Ohaio',
    blogs: [
        {title: 'why segments hurt in the butt', Likes: 19720, Author: "You don't need to know" },
        {title:'10 tips to hire a segments sniper', Likes: 1090128, Author: "Same as before"}
    ],
    login: function(){
        console.log('The user loged in');
    },
    logout: function(){
        console.log('The user just logged out');
    },
    logBlogs: function(){
        //console.log(this.blogs);
        console.log('This user has posted the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.Likes, blog.Author);
        })
    }
    };

user.login();
user.logout();
user.logBlogs();

