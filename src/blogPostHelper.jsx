const markdownContext = require.context('./blogPosts', false, /\.md$/);




// Let's get even more succint...
const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./blogPosts', false, /\.md$/))

console.log(markdownContext);
export const getBlogPostList  = async () => {
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
    .catch((err) => console.error(err));
    return posts
};

// export const getBlogPostContent = (id) => 
