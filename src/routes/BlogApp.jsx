// import { getBlogPostList } from "../blogPostHelper"
import React, { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { getBlogPostText, getBlogPostTitle } from '../blogPostHelper';
import removeComments from 'remark-remove-comments';
import './github-markdown.css'
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router-dom";

const BlogApp = () => {
	const [postsMap, setPostsMap] = useState(new Map())
	const [postsTitleList, setPostsTitleList] = useState([])

	useEffect(() => {
		const getPost = async () => {
			const postsText = await getBlogPostText()
			const postsTitle = getBlogPostTitle(postsText)
			let l = []
			for(let i=0; i<postsText.length; i++){
				l.push([postsTitle[i], postsText[i]])
			}

			setPostsTitleList(postsTitle)
			setPostsMap(new Map(l))
		}
		getPost();
	}, []);

	return (
		<div>
			<ReactMarkdown># Hello, *world*!</ReactMarkdown>
			<SideBar postsTitleList={postsTitleList} />
			<PostBody postsMap={postsMap}/>
		</div>
	)
}

const SideBar = ({postsTitleList}) => (
	postsTitleList.map( (title) => (
		<div className="flex">
			<NavLink className={({ isActive }) => isActive ? "text-amber-600": ""} key={title} to={`/blog/${title}`}>{title}</NavLink>
		</div>
	))
)
		
const PostBody = ({postsMap}) => {
	let params = useParams();
	return (
	<div className='markdown-body'>
		<ReactMarkdown children={postsMap.get(params.title)} remarkPlugins={[removeComments]}/>
	</div>)
}

export default BlogApp;