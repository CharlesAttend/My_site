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
	
	let paramTitle = useParams().title;
	// if(paramTitle === undefined){
	// 	return (
	// 		<div className='flex flex-col p-5 bg-cwhite h-screen'>
	// 			<span className='py-10 text-center text-4xl text-cpurple'>Blog</span>
	// 			<ul className='row-span-2 list-inside list-disc flex flex-col justify-center text-cgray'>
	// 				<SideBar postsTitleList={postsTitleList} />
	// 			</ul>
	// 		</div>
	// 	)
	// }
	// else {
	// 	return (
	// 		<div className='m-10'>
	// 			<PostBody postsMap={postsMap}/>
	// 		</div>
	// 	)
	// }

	return (
		<div className='lg:grid lg:grid-cols-6 lg:h-screen'>
			<div className={paramTitle ? 'hidden lg:block lg:col-span-1' : ''}><SideBar postsTitleList={postsTitleList} /></div>
			<div className={paramTitle ? 'lg:col-span-5' : 'hidden lg:block '}><PostBody postsMap={postsMap} /></div>
		</div>
	)

}

const SideBar = ({postsTitleList}) => (
	<div className='flex flex-col p-5 bg-cwhite h-screen'>
		<span className='py-10 text-center text-4xl text-cpurple'>Blog</span>
		<ul className='row-span-2 lg:col-span-6 lg:pl-12 list-inside list-disc flex flex-col justify-center text-cgray'>
			{postsTitleList.map( (title) => (
				<li className="m-1">
					<NavLink className={({ isActive }) => isActive ? "text-cpurple": ""} key={title} to={`/blog/${title.replaceAll(' ', '_').replaceAll('é', 'e')}`}>{title}</NavLink>
				</li>
			))}
		</ul>
	</div>
)
		
const PostBody = ({postsMap}) => {
	let paramTitle = useParams().title;
	if(paramTitle === undefined){
		paramTitle = '';
		return <div></div>
	}
	else {
		paramTitle = paramTitle.replaceAll(' ', '_').replaceAll('é', 'e');
		return (
			<div className='m-10'>
				<div className='markdown-body'>
					<ReactMarkdown children={postsMap.get(paramTitle)} remarkPlugins={[removeComments]} />
				</div>
			</div>
		)
	}
	
}

export default BlogApp;