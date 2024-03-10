import React from 'react'
import BlogCard from '../components/blog/BlogCard';
import { useSelector } from 'react-redux'
import blog_bg from '../assets/img/blog/blog_bg.jpeg'
import { Link } from 'react-router-dom';
import Join from '../components/home/Join';

const Blog = () => {
    const newsdata = useSelector(p=>p);
    return (
        <>
        <div className="blog">
            <div className="blog-bg d-flex flex-column justify-content-center align-items-center" style={{backgroundImage:`url(${blog_bg})`}}>
            <h1>Blog</h1>
          <p className='mt-2'><Link to="/">Home Page</Link>
            <i className="fa-solid fa-chevron-right mx-2"></i>
            <span>Blog</span>
          </p>
            </div>
            <div className='container-fluid cards'>
                <div className="row g-4">
                    {newsdata.map(item => (
                        <BlogCard
                            category={item.category}
                            image={item.img}
                            title={item.title}
                            key={item.id}
                        />
                    ))}
                </div>
            </div>
            <Join/>
        </div>
        </>
    )
}

export default Blog