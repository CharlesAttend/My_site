import React, { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { getBlogPostText, getBlogPostTitle } from './blogPostHelper';
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
			const l = []
			postsTitle.forEach((title, index) => {
				l.push([title.replaceAll(' ', '_').replaceAll('é', 'e'), postsText[index]])
			});

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
			<NavLink className={({ isActive }) => isActive ? "text-amber-600": ""} key={title} to={`/blog/${title.replaceAll(' ', '_').replaceAll('é', 'e')}`}>{title}</NavLink>
		</div>
	))
)
		
const PostBody = ({postsMap}) => {
	let paramTitle = useParams().title;
	if(paramTitle === undefined){
		paramTitle = '';
	}
	else {
		paramTitle = paramTitle.replaceAll(' ', '_').replaceAll('é', 'e');
	}
	
	return (
	<div className='markdown-body'>
		<ReactMarkdown children={postsMap.get(paramTitle)} remarkPlugins={[removeComments]}/>
	</div>)
}

export default BlogApp;