import React, { useState, useEffect} from 'react';
import { getBlogPostText, getBlogPostTitle } from './blogPostHelper';

import ReactMarkdown from 'react-markdown';
import removeComments from 'remark-remove-comments';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialLight} from 'react-syntax-highlighter/dist/esm/styles/prism'
import './github-markdown-light.css';
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

import { NavLink, Link } from 'react-router-dom';
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

	return (
		<div className='lg:grid lg:grid-cols-6 lg:h-screen'>
			<div className={paramTitle ? 'hidden lg:block lg:col-span-1' : ''}><SideBar postsTitleList={postsTitleList} /></div>
			<div className={paramTitle ? 'lg:col-span-5' : 'hidden lg:block '}><PostBody postsMap={postsMap} /></div>
		</div>
	)

}

const SideBar = ({postsTitleList}) => (
	<div className='flex flex-col p-5 bg-cwhite h-screen lg:h-full'>
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
		
const PostBody = ({ postsMap }) => {
	let paramTitle = useParams().title;
	if (paramTitle === undefined) {
		paramTitle = '';
		return <div></div>
	}
	else {
		paramTitle = paramTitle.replaceAll(' ', '_').replaceAll('é', 'e');
		return (
			<div>
				<div className='flex justify-center lg:hidden'><Link to='/blog/' className='border border-cpurple p-2 m-2 rounded-md bg-cpurple text-white hover:text-cdpurple hover:bg-white text-xl font-semibold'>Menu</Link></div>
				<div className='mx-10 my-2 lg:mx-56 lg:my-10'>
					<div className='markdown-body'>
						<ReactMarkdown 
						children={postsMap.get(paramTitle)} 
						linkTarget="_blank" 
						remarkPlugins={[removeComments, remarkGfm, ]}
						rehypePlugins={[rehypeRaw]}
						components={{
							code({ node, inline, className, children, ...props }) {
								const match = /language-(\w+)/.exec(className || '')
								return !inline && match ? (
									<SyntaxHighlighter
										children={String(children).replace(/\n$/, '')}
										style={materialLight}
										language={match[1]}
										PreTag="div"
										{...props}
									/>
								) : (
									<code className={className} {...props}>
										{children}
									</code>
								)
							}
						}} 
						/>
					</div>
				</div>
			</div>
		)
	}

}

export default BlogApp;