// import { getBlogPostList } from "../blogPostHelper"
import React, { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';


// Let's get even more succint...
const importAll = (r) => r.keys().map(r);

const BlogApp = () => (
	<div>
		<SideBar />
	</div>
)

const SideBar = () => {
	const [posts, setPosts] = useState(new Map())
	
    useEffect(() => {
		const markdownFiles = importAll(require.context('../blogPosts', false, /\.md$/))
		for(let i=0; i<markdownFiles.length; i++){
			const fileName = markdownFiles[i]
			import(`../blogPosts/${fileName}`)
				.then(res => {
					fetch(res.default)
						.then(res => res.text())
						.then(res => setPosts(posts.set(fileName, res)))
						.catch(err => console.log(err));
				})
				.catch(err => console.log(err));
		}
		console.log(posts);
    });
	return (
		<div>
			{
				posts.forEach((value, key) => {
					<div>{key}, {value}</div>
				})
			}
		</div>
	)
}

export default BlogApp;