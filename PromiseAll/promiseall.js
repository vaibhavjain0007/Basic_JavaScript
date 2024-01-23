const posts = [
    {title: 'Post One', body: 'This is First Post'},
    {title: 'Post Two', body: 'This is Second Post'},
];

function getAllPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.forEach((post) => {
                const title = post.title
                document.body.innerHTML = '<li>' + title + '</li>'
                console.log(post.title);
            });
            resolve();
        }, 1000);
    })
}

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
        }, 1000)
    })
}

function updateLastUserActivityTime() {
    
}

getAllPost();

