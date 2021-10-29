import React from 'react';
import blog1 from '../../images/blog1.jpg';
import blog2 from '../../images/blog2.jpg';
import blog3 from '../../images/blog3.jpg';
import './Blog.css';

const Blog = () => {
    return (
        <>
           <div className="blog-area py-5">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-md-6">
                            <div className="section-title text-center">
                                <h1 className="theme-color">Our Latest Blogs</h1>
                                <p>Our latest Blogs are published in this area. Every latest blog are instantly published this area.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-blog">
                                <div className="news-img">
                                    <img src={blog1} alt="" />
                                    <span className="theme-bg">10 October 2021</span>
                                </div>
                                <h3 className="my-3">Turkey and White Bean Chili</h3>
                                <p>Unless a chili is thickened with a flour-base, most chili is naturally gluten-free. This recipe is one of them—made with dark-meat turkey, beans, green chiles, and loaded with vegetables. Top this turkey and white bean chili with toppings like red onion, jalapeño, and avocado for a bowl bursting with flavo</p>
                                <button className="btn theme-bg text-white">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-blog">
                                <div className="news-img">
                                    <img src={blog2} alt="" />
                                    <span className="theme-bg">9 October 2021</span>
                                </div>
                                <h3 className="my-3">BBQ Chicken Sheet Pan Dinner </h3>
                                <p>No mushy gluten-free noodles here! This gluten-free macaroni and cheese recipe will satisfy that craving you've had for this creamy dish. This gluten-free macaroni and cheese is packed with chard—which brings a lot of great nutrients to this dish—and topped with a flavorful sage breadcrumb. </p>
                                <button className="btn theme-bg text-white">Read More</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-blog">
                                <div className="news-img">
                                    <img src={blog3} alt="" />
                                    <span className="theme-bg">5 October 2021</span>
                                </div>
                                <h3 className="my-3">Sweet Potato and Cauliflower</h3>
                                <p>While this combination is one of our favorites, you really could try any combination that you desire. Not a fan of broccoli? Try adding some asparagus spears, Brussels sprouts, or green beans. Don't like sweet potato? Roast up some regular potato bits, or even some chickpeas, sweet potato</p>
                                <button className="btn theme-bg text-white">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
};

export default Blog;