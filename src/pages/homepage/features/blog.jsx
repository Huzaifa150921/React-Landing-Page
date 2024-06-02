import React from 'react'
import Blog1 from '../../../assets/blog1.png'
import Blog2 from '../../../assets/blog2.png'

const Blog = () => {
  return (
    <div className="blog_track">
        <div className="page_width">
                <div className="blog_title">
                     <h3>Our Blogs</h3>
                </div>
                <div className="blog_container">
                    <div>
                        <div className="blog_detail">
                        <img  src={Blog1} alt="Logo" />
                            <div className="blog">
                              <small>November 16, 2014</small>
                              <h6>Three Pillars of User Delight</h6>
                              <p>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
                              <div className="tag">
                              <a>Reserach</a>  <a className='second_tag'>UI/UX</a>
                              </div>
                            </div>

                            
                        </div>

                        <div className="blog_detail">
                        <img  src={Blog1} alt="Logo" />
                            <div className="blog">
                              <small>November 16, 2014</small>
                              <h6>Three Pillars of User Delight</h6>
                              <p>Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...</p>
                              <div className="tag">
                              <a>Reserach</a>  <a className='second_tag'>UI Design</a>
                              </div>
                            </div>

                            
                        </div>
                    </div>
                    <div>
                    <div className="blog_detail">
                      <img  src={Blog2} className='blog_2' alt="Logo" />
                            
                      </div>
                            <small>March 13, 2014</small>
                              <h6>Agile Development Projects and Usability</h6>
                              <p>Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. </p>
                              <div className="tag">
                              <a className='prog_tag'>Programming</a>  <a className='second_tag'>Reserach</a> <a>Developments</a> 
                              </div>
                    </div>
                </div>   
        </div>

    </div>
    
  )
}

export default Blog