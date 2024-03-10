import React from 'react'

const BlogCard = ({category,image,title}) => {
    return (
        <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <img src={image} className="card-img-top" alt={title} />
                <div className="card-body">
                    <p className='d-flex align-items-center'>
                    <a href="#"><span className='category'>{category}</span></a>
                    <span className='mx-1 mb-2'>.</span>
                    <a href="#"><span className='date'>OCTOBER 19, 2023 </span></a>
                    <span className='mx-1 mb-2'>.</span>
                    <a href="#"><span className='date'>COMMENTS (3)</span></a>
                    </p>
                    <a href="#"><h5 className="card-title mb-4">{title}</h5></a>
                    <p className="card-text mb-4">Ac haca ullamcorper donec ante habi tasse donec imperdiet <br /> eturpis varius per a augue magna hac. Nec hac et vestibulum...</p>
                    <a href="#" className='readmore'>
                    <span>READ MORE</span>
                    <i class="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default BlogCard