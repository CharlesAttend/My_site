// import { getBlogPostList } from "../blogPostHelper"
import React, { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { getBlogPostText, getBlogPostTitle } from '../blogPostHelper';
import removeComments from 'remark-remove-comments';
import './github-markdown.css'

const BlogApp = () => {
	const [postsMap, setPostsMap] = useState(new Map())
	const [postsTitleList, setPostsTitleList] = useState([])
	const [selectedPostTitle, setSelectedPostTitle] = useState("")
	
	useEffect(() => {
		const getPost = async () => {
			const postsText = await getBlogPostText()
			const postsTitle = getBlogPostTitle(postsText)
			let l = []
			for(let i=0; i<postsText.length; i++){
				l.push([postsTitle[i], postsText[i]])
			}

			setPostsTitleList(postsTitle)
			setSelectedPostTitle(postsTitleList[0])
			setPostsMap(new Map(l))
		}
		getPost();
	}, []);

	return (
		<div>
			<ReactMarkdown># Hello, *world*!</ReactMarkdown>
			<SideBar postsTitleList={postsTitleList} />
			<PostBody postsMap={postsMap} selectedPostTitle={selectedPostTitle} />
		</div>
	)
}

const SideBar = ({postsTitleList}) => (
	postsTitleList.map( (title) => (
		<div id={title}>{title}</div>
	))
)
		
const PostBody = ({postsMap, selectedPostTitle}) => (
	<div className='markdown-body'>
		<ReactMarkdown children={postsMap.get(selectedPostTitle)} remarkPlugins={[removeComments]}/>
	</div>
)

export default BlogApp;