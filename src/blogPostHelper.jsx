const markdownContext = require.context('./blogPosts', false, /\.md$/);




// Let's get even more succint...
const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./blogPosts', false, /\.md$/))

export const getBlogPostText = async () => {
    const posts = await Promise.all(markdownFiles.map((file) => fetch(file).then((res) => res.text())))
    .catch((err) => console.error(err));
    return posts
};

export const getBlogPostTitle = (postsText) => (
    postsText.map((text) => (
        text.match(/<!-- (.*?) -->/)[1]
    ))
)



// export const getBlogPostContent = (id) => 
