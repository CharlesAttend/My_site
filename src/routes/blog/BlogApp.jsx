import React, { useState, useEffect} from 'react';
import ReactMarkdown from 'react-markdown';
import { getBlogPostText, getBlogPostTitle } from './blogPostHelper';
import removeComments from 'remark-remove-comments';
import './github-markdown-light.css'
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
		<div className='grid grid-cols-6 h-screen'>
			<ul className='list-inside list-disc col-span-1 flex flex-col justify-center pl-12 bg-cwhite text-cgray'>
				<SideBar postsTitleList={postsTitleList} />
			</ul>
			<div className='col-span-5 m-10'>
				<PostBody postsMap={postsMap}/>
			</div>
		</div>
	)
}

const SideBar = ({postsTitleList}) => (
	postsTitleList.map( (title) => (
		<li className="m-1">
			<NavLink className={({ isActive }) => isActive ? "text-cpurple": ""} key={title} to={`/blog/${title.replaceAll(' ', '_').replaceAll('é', 'e')}`}>{title}</NavLink>
		</li>
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