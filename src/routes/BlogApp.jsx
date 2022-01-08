// import { getBlogPostList } from "../blogPostHelper"
import React, { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { getBlogPostText, getBlogPostTitle } from '../blogPostHelper';
import removeComments from 'remark-remove-comments';
import './github-markdown.css'

const BlogApp = () => (
	<div>
		<ReactMarkdown># Hello, *world*!</ReactMarkdown>
		<SideBar />
	</div>
)

const SideBar = () => {
	const [postsMap, setPostsMap] = useState(new Map())
	const [postsTitleList, setPostsTitleList] = useState([])
	
    useEffect(() => {
		const getPost = async () => {
			const postsText = await getBlogPostText()
			const postsTitle = getBlogPostTitle(postsText)
			setPostsTitleList(postsTitle)

			let l = []
			for(let i=0; i<postsText.length; i++){
				l.push([postsTitle[i], postsText[i]])
			}
			setPostsMap(new Map(l))
		}
		getPost();
    }, []);
	
	return (
		postsTitleList.map( (title) => (
			<div className='markdown-body'>
				<ReactMarkdown children={postsMap.get(title)} remarkPlugins={removeComments}/>
			</div>
		))
	)
}

export default BlogApp;