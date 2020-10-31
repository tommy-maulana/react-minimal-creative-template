import React, {Component} from 'react';

class Home extends React.Component{
    render(){
        return(
            <div>
                {/* <!-- Start Loader --> */}
                <div class="loader" id="loader-fade">
                    <div class="loader-container center-block">
                        <div class="grid-row">
                            <div class="col center-block">
                                <ul class="loading reversed">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Loader --> */}

                {/* <!-- Header Start --> */}
                <header class="top-header cursor-light">
                    <div class="row no-gutters">
                        <div class="col-4 col-lg-4">
                            <a href="index-minimal-creative.html" title="Logo" class="logo link">
                                {/* <!--Logo Default--> */}
                                <img src="minimal-creative/images/logo.png" alt="logo" class="ml-lg-3 m-0" />
                            </a>
                        </div>
                        <div class="col-8 col-lg-4 d-flex align-items-center justify-content-end justify-content-lg-center">
                            <a class="menu_bars menu-bars-setting sidemenu_toggle link mr-3 mr-lg-0">
                                <div class="menu-lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                        <div class="col-4 d-flex justify-content-end">
                            <a href="#contact-sec" class="btn btn-medium btn-rounded btn-trans mr-lg-4 d-none d-lg-inline-block scroll">Get a Quote</a>
                        </div>
                    </div>
                <div>
                    {/* <!-- Center Menu --> */}
                    <div class="side-menu center">
                        <div class="quarter-circle" id="btn_sideNavClose">
                            <div class="menu_bars2 active link">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div class="inner-wrapper justify-content-center">
                            <div class="col-md-12 text-center">
                                <a href="javascript:void(0)" class="logo-full mb-4 link"><img src="minimal-creative/images/logo.png" alt="Logo" /></a>
                            </div>
                            <nav class="side-nav m-0">
                                <ul class="navbar-nav flex-lg-row">
                                    <li class="nav-item"> <a href="#home" class="scroll nav-link link">home</a></li>
                                    <li class="nav-item"> <a href="#about" class="scroll nav-link link">about</a></li>
                                    <li class="nav-item"> <a href="#portfolio" class="scroll nav-link link">portfolio</a></li>
                                    <li class="nav-item"> <a href="#pricing-sec" class="scroll nav-link link">pricing</a></li>
                                    <li class="nav-item"> <a href="#blog" class="scroll nav-link link">blog</a></li>
                                    <li class="nav-item"> <a href="#contact-sec" class="scroll nav-link link">contact</a></li>
                                </ul>
                            </nav>

                            <div class="side-footer text-black w-100">
                                <ul class="social-icons-simple">
                                    <li class="side-menu-icons animated-wrap"><a href="javascript:void(0)" class="animated-element"><i class="fab fa-facebook-f"></i> </a> </li>
                                    <li class="side-menu-icons animated-wrap"><a href="javascript:void(0)" class="animated-element"><i class="fab fa-twitter"></i> </a> </li>
                                    <li class="side-menu-icons animated-wrap"><a href="javascript:void(0)" class="animated-element"><i class="fab fa-instagram"></i> </a> </li>
                                    <li class="side-menu-icons animated-wrap"><a href="javascript:void(0)" class="animated-element"><i class="fab fa-linkedin-in"></i> </a> </li>
                                </ul>
                                <p class="text-black">&copy; 2020 MegaOne. Made With Love by Themesindustry</p>
                            </div>
                        </div>
                    </div>
                    <a id="close_side_menu" href="javascript:void(0);"></a>
                    {/* <!--Side Menu--> */}
                </div>
                </header>
                {/* <!-- Header End -->

                <!-- Banner Start --> */}
                <section class="banner py-0 cursor-light" id="home">
                    <div class="row no-gutters">
                        <div id="carouselFade" class="carousel slide carousel-fade" data-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                </div>
                                <div class="carousel-item">
                                </div>
                                <div class="carousel-item">
                                </div>
                            </div>
                        </div>
                        {/* <!-- Social Icons --> */}
                        <ul class="social-icons social-icons-simple revicon d-none d-md-block d-lg-block cursor-light">
                            <li class="d-table animated-wrap"><a href="javascript:void(0)" class="animated-element"><i class="fab fa-facebook-f"></i></a> </li>
                            <li class="d-table animated-wrap"><a href="javascript:void(0)" class="animated-element"><i class="fab fa-twitter"></i> </a> </li>
                            <li class="d-table animated-wrap"><a href="javascript:void(0)" class="animated-element"><i class="fab fa-linkedin-in"></i> </a> </li>
                            <li class="d-table animated-wrap"><a href="javascript:void(0)" class="animated-element"><i class="fab fa-instagram"></i> </a> </li>
                        </ul>

                        <div class="container">
                            <div class="row content-carousal">
                                <div class="col-sm-12 col-lg-6 d-flex align-items-center col-height text-center text-lg-left wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".1s">
                                    <div class="detail-sec">
                                        <h1 class="main-heading">Design makes <span class="d-block text-orange js-rotating">creativity., artistry.</span></h1>
                                        <p class="sub-para margin-sub-heading">Donec quis nunc mollis, tincidunt mi vel, pellentesque arcu. Nam nec tristique ex, vitae posuere enim. Nunc vulputate metus id ex pretium fermentum. </p>
                                        <a href="#about" class="btn btn-medium btn-rounded btn-red scroll">Read More</a>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-6 d-flex align-items-center">
                                    <div class="row no-gutters">
                                        <div class="col-12 col-md-6 mini-slider p-0 d-inline-block d-lg-flex justify-content-center align-items-center">
                                            <div id="carouselExampleSlidesOnly" class="carousel slide image-div" data-ride="carousel">
                                                <div class="carousel-inner">
                                                    <div class="carousel-item active wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                                                        <img class="d-block w-100" src="minimal-creative/images/box-img-1.jpg" alt="First slide" />
                                                    </div>
                                                    <div class="carousel-item animation1">
                                                        <img class="d-block w-100" src="minimal-creative/images/box-img-2.jpg" alt="Second slide" />
                                                    </div>
                                                    <div class="carousel-item animation2">
                                                        <img class="d-block w-100" src="minimal-creative/images/box-img-3.jpg" alt="Second slide" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    {/*  <!-- Box-1 --> */}
                                        <div class="col-12 col-md-6 p-0 wow fadeIn" data-wow-duration="1s" data-wow-delay=".1s">
                                            <a href="#portfolio" class="text-decoration-none scroll">
                                                <div class="custom-box bg-red box-1">
                                                    <div class="bg-study-icon">
                                                        <i class="las la-address-book"></i>
                                                    </div>
                                                    <h1 class="box-text mb-sm-2 mt-sm-2 mb-md-3 mt-md-3 mb-lg-3 mt-lg-3">Check Latest Portfolio</h1>
                                                    <div class="arrow-box">
                                                        <i class="las la-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </a>
                                            {/* <!-- Box-2 --> */}
                                            <a href="#about" class="text-decoration-none scroll wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">
                                                <div class="custom-box bg-orange">
                                                    <div class="bg-campus-icon">
                                                        <i class="las la-registered"></i>
                                                    </div>
                                                    <h1 class="box-text">Want to know about Company?</h1>
                                                    <div class="arrow-box1">
                                                        <i class="las la-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Banner End -->

                <!-- About Start --> */}
                <section id="about" class="about-sec bg-gray">
                    <div class="container">
                        <div class="row about-details text-center">
                            <div class="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 wow zoomIn" data-wow-duration="1s" data-wow-delay=".1s">
                                <p class="sub-heading text-center"><span></span>Most flexible one page</p>
                                <h3 class="heading text-center">Trending <span class="d-block">Creative Agency</span></h3>
                                <p class="text text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere nisi est, sed ullamcorper nibh volutpat at. In rutrum, metus ut posuere gravida, tellus lacus faucibus lectus, sed cursused eros ligula non odio. Suspendisse volutpat sagittis sapien. Curabitur quis malesuada ipsum.</p>
                                <a href="#portfolio" class="btn btn-medium btn-rounded btn-red scroll">Learn More</a>
                            </div>
                        </div>
                        <div class="row our-about-sec">
                            <div class="col-12 col-lg-4 wow slideInLeft" data-wow-duration="1s">
                                <div class="about-card text-center">
                                    <a href="javascript:void(0);">
                                        <div class="image-holder">
                                            <i class="lni-pencil-alt"></i>
                                        </div>
                                        <h3 class="about-card-heading">Logo Designing</h3>
                                        <p class="about-card-detail">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit augue diam, accumsan.
                                        </p>
                                    </a>
                                </div>

                            </div>
                            <div class="col-12 col-lg-4 wow slideInUp" data-wow-duration="1s">
                                <div class="about-card text-center">
                                    <a href="javascript:void(0);">
                                        <div class="image-holder">
                                            <i class="lni-cog"></i>
                                        </div>
                                        <h3 class="about-card-heading">Customer Setup</h3>
                                        <p class="about-card-detail">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit augue diam, accumsan.
                                        </p>
                                    </a>
                                </div>
                            </div>
                            <div class="col-12 col-lg-4 wow slideInRight" data-wow-duration="1s">
                                <div class="about-card text-center ">
                                    <a href="javascript:void(0);">
                                        <div class="image-holder">
                                            <i class="lni-code"></i>
                                        </div>
                                        <h3 class="about-card-heading">Latest Technologies</h3>
                                        <p class="about-card-detail">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit augue diam, accumsan.
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About End -->

                <!-- Portfolio Start --> */}
                <section id="portfolio" class="portfolio">
                {/*  <!-- Counter --> */}
                    <div class="container">
                        <div class="row my-4 my-md-0">
                            {/* <!-- Counter --> */}
                            <div class="col-12 col-md-3">
                                <div class="parallax-box">
                                    <h2 class="count">125</h2>
                                    <h5>Happy Customers</h5>
                                </div>
                            </div>
                            {/* <!-- Counter --> */}
                            <div class="col-12 col-md-3">
                                <div class="parallax-box">
                                    <h2 class="count text-orange">865</h2>
                                    <h5>Lines of Codes</h5>
                                </div>
                            </div>
                            {/* <!-- Counter --> */}
                            <div class="col-12 col-md-3">
                                <div class="parallax-box">
                                    <h2 class="count text-red">510</h2>
                                    <h5>Project Completed</h5>
                                </div>
                            </div>
                            {/* <!-- Counter --> */}
                            <div class="col-12 col-md-3">
                                <div class="parallax-box">
                                    <h2 class="count">699</h2>
                                    <h5>Satisfied Reviews</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Portfolio --> */}
                    <div class="container-fluid wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                        <div class="row padding-top">
                            <div class="col-sm-12">
                                <div class="text-center row">
                                    {/* <!-- Item 1 --> */}
                                    <div class="item col-md-12 col-lg-3">
                                        <div class="team-data-img">
                                            <a href="minimal-creative/images/cases1.jpg" data-fancybox="images">
                                                <div class="single-work">
                                                    <img src="minimal-creative/images/cases1.jpg" alt="team" class="img-responsive" data-no-retina />
                                                    <div class="overlay-text center-block">
                                                        <div class="cases-image-inner">
                                                            <span class="cases-line top"></span>
                                                            <span class="cases-line top-right"></span>
                                                            <span class="cases-line bottom"></span>
                                                            <span class="cases-line bottom-left"></span>
                                                            <h6 class="text-white text-uppercase alt-font">Strategy Buildup</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Item 2 --> */}
                                    <div class="item col-md-12 col-lg-3">
                                        <div class="team-data-img">
                                            <a href="minimal-creative/images/cases2.jpg" data-fancybox="images">
                                                <div class="single-work">
                                                    <img src="minimal-creative/images/cases2.jpg" alt="team" class="img-responsive" data-no-retina />
                                                    <div class="overlay-text center-block">
                                                        <div class="cases-image-inner">
                                                            <span class="cases-line top"></span>
                                                            <span class="cases-line top-right"></span>
                                                            <span class="cases-line bottom"></span>
                                                            <span class="cases-line bottom-left"></span>
                                                            <h6 class="text-white text-uppercase alt-font">Business Planning</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Item 3 --> */}
                                    <div class="item col-md-12 col-lg-3">
                                        <div class="team-data-img">
                                            <a href="minimal-creative/images/cases3.jpg" data-fancybox="images">
                                                <div class="single-work">
                                                    <img src="minimal-creative/images/cases3.jpg" alt="team" class="img-responsive" data-no-retina />
                                                    <div class="overlay-text center-block">
                                                        <div class="cases-image-inner">
                                                            <span class="cases-line top"></span>
                                                            <span class="cases-line top-right"></span>
                                                            <span class="cases-line bottom"></span>
                                                            <span class="cases-line bottom-left"></span>
                                                            <h6 class="text-white text-uppercase alt-font">Creative Ideas</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Item 4 --> */}
                                    <div class="item col-md-12 col-lg-3">
                                        <div class="team-data-img">
                                            <a href="minimal-creative/images/cases4.jpg" data-fancybox="images">
                                                <div class="single-work">
                                                    <img src="minimal-creative/images/cases4.jpg" alt="team" class="img-responsive" data-no-retina />
                                                    <div class="overlay-text center-block">
                                                        <div class="cases-image-inner">
                                                            <span class="cases-line top"></span>
                                                            <span class="cases-line top-right"></span>
                                                            <span class="cases-line bottom"></span>
                                                            <span class="cases-line bottom-left"></span>
                                                            <h6 class="text-white text-uppercase alt-font">Creative Ideas</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="text-center row">
                                    {/* <!-- Item 5 --> */}
                                    <div class="item col-md-12 col-lg-3">
                                        <div class="team-data-img">
                                            <a href="minimal-creative/images/cases5.jpg" data-fancybox="images">
                                                <div class="single-work">
                                                    <img src="minimal-creative/images/cases5.jpg" alt="team" class="img-responsive" data-no-retina />
                                                    <div class="overlay-text center-block">
                                                        <div class="cases-image-inner">
                                                            <span class="cases-line top"></span>
                                                            <span class="cases-line top-right"></span>
                                                            <span class="cases-line bottom"></span>
                                                            <span class="cases-line bottom-left"></span>
                                                            <h6 class="text-white text-uppercase alt-font">Social Media Marketing</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Item 6 --> */}
                                    <div class="item col-md-12 col-lg-3">
                                        <div class="team-data-img">
                                            <a href="minimal-creative/images/cases6.jpg" data-fancybox="images">
                                                <div class="single-work">
                                                    <img src="minimal-creative/images/cases6.jpg" alt="team" class="img-responsive" data-no-retina />
                                                    <div class="overlay-text center-block">
                                                        <div class="cases-image-inner">
                                                            <span class="cases-line top"></span>
                                                            <span class="cases-line top-right"></span>
                                                            <span class="cases-line bottom"></span>
                                                            <span class="cases-line bottom-left"></span>
                                                            <h6 class="text-white text-uppercase alt-font">Financial Consultations</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Item 7 --> */}
                                    <div class="item col-md-12 col-lg-3">
                                        <div class="team-data-img">
                                            <a href="minimal-creative/images/cases7.jpg" data-fancybox="images">
                                                <div class="single-work">
                                                    <img src="minimal-creative/images/cases7.jpg" alt="team" class="img-responsive" data-no-retina />
                                                    <div class="overlay-text center-block">
                                                        <div class="cases-image-inner">
                                                            <span class="cases-line top"></span>
                                                            <span class="cases-line top-right"></span>
                                                            <span class="cases-line bottom"></span>
                                                            <span class="cases-line bottom-left"></span>
                                                            <h6 class="text-white text-uppercase alt-font">Creative Idea Generator</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!-- Item 8 --> */}
                                    <div class="item col-md-12 col-lg-3">
                                        <div class="team-data-img">
                                            <a href="minimal-creative/images/cases8.jpg" data-fancybox="images">
                                                <div class="single-work">
                                                    <img src="minimal-creative/images/cases8.jpg" alt="team" class="img-responsive" data-no-retina />
                                                    <div class="overlay-text center-block">
                                                        <div class="cases-image-inner">
                                                            <span class="cases-line top"></span>
                                                            <span class="cases-line top-right"></span>
                                                            <span class="cases-line bottom"></span>
                                                            <span class="cases-line bottom-left"></span>
                                                            <h6 class="text-white text-uppercase alt-font">Build Up Career</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Portfolio End -->

                <!-- Prize Start --> */}
                <section id="pricing-sec" class="pricing-sec bg-gray">
                    <div class="container">
                        <div class="row">
                            <div class="pricing-details col-10 offset-1 col-lg-8 offset-lg-2 text-center wow zoomIn" data-wow-duration="1s" data-wow-delay=".1s">
                                <p class="sub-heading text-red"><span></span>Most flexible one page</p>
                                <h4 class="heading">Agency Packages</h4>
                                <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere nisi est, sed ullamcorper nibh volutpat at. In rutrum, metus ut posuere gravida, tellus lacus faucibus lectus, sed cursus eros ligula non odio. Suspendisse volutpat sagittis sapien. Curabitur quis malesuada ipsum.</p>
                            </div>
                        </div>
                        <div class="row price-cards mt-5">
                            {/* <!-- Price-1 --> */}
                            <div class="pricing-card col-12 col-lg-4 text-center wow fadeInLeft" data-wow-duration="2s" data-wow-delay=".1s">
                                <h4 class="pricing-card-heading">Startup</h4>
                                <p class="pricing-card-text">Click edit button to change this text. Lorem
                                    dolor sit amet, consectetur adipiscing elit.</p>
                                <h3 class="pricing-amount"><i class="lni-dollar"></i>19<span>/ Month</span></h3>
                                <ul class="pricing-features">
                                    <li>Full Access</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>Email Accounts</li>
                                    <li>8 Free Forks Every Months</li>
                                </ul>
                                <a href="javascript:void(0)" class="btn btn-medium btn-rounded btn-black">Learn More</a>
                            </div>
                            {/* <!-- Price-2 --> */}
                            <div class="pricing-card active col-12 col-lg-4 text-center wow fadeInUp" data-wow-duration="2s" data-wow-delay=".1s">
                                <h4 class="pricing-card-heading">Standard</h4>
                                <p class="pricing-card-text">Click edit button to change this text. Lorem
                                    dolor sit amet, consectetur adipiscing elit.</p>
                                <h3 class="pricing-amount"><i class="lni-dollar"></i>56<span>/ Month</span></h3>
                                <ul class="pricing-features">
                                    <li>Full Access</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>Email Accounts</li>
                                    <li>8 Free Forks Every Months</li>
                                </ul>
                                <a href="javascript:void(0)" class="btn btn-medium btn-rounded btn-black">Learn More</a>
                            </div>
                            {/* <!-- Price-3 --> */}
                            <div class="pricing-card col-12 col-lg-4 text-center wow fadeInRight" data-wow-duration="2s" data-wow-delay=".1s">
                                <h4 class="pricing-card-heading">Premium</h4>
                                <p class="pricing-card-text">Click edit button to change this text. Lorem
                                    dolor sit amet, consectetur adipiscing elit.</p>
                                <h3 class="pricing-amount"><i class="lni-dollar"></i>89<span>/ Month</span></h3>
                                <ul class="pricing-features">
                                    <li>Full Access</li>
                                    <li>Unlimited Bandwidth</li>
                                    <li>Email Accounts</li>
                                    <li>8 Free Forks Every Months</li>
                                </ul>
                                <a href="javascript:void(0)" class="btn btn-medium btn-rounded btn-black">Learn More</a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Prize End -->

                <!-- Blog Start --> */}
                <section class="sponsor-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="sponsor-tags owl-carousel owl-theme">
                                    <div class="item">
                                        <img src="minimal-creative/images/client-1.png" alt="Client" />
                                    </div>
                                    <div class="item">
                                        <img src="minimal-creative/images/client-2.png" alt="Client" />
                                    </div>
                                    <div class="item">
                                        <img src="minimal-creative/images/client-3.png" alt="Client" />
                                    </div>
                                    <div class="item">
                                        <img src="minimal-creative/images/client-4.png" alt="Client" />
                                    </div>
                                    <div class="item">
                                        <img src="minimal-creative/images/client-5.png" alt="Client" />
                                    </div>
                                    <div class="item">
                                        <img src="minimal-creative/images/client-6.png" alt="Client" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row align-items-center blog-area"  id="blog">
                            <div class="col-12 col-md-6 wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".1s">
                                <h4 class="heading">Creative <span class="d-block text-orange">Design Blogs</span></h4>
                                <p class="text">Donec quis nunc mollis, tincidunt mi vel, pellentesque arcu. Nam nec tristique ex, vitae posuere enim. Nunc vulputate metus id ex pretium fermentum. </p>
                                <a href="#contact-sec" class="btn btn-medium btn-rounded btn-red mb-5 mb-md-0">Read Blog</a>

                            </div>
                            <div class="col-12 col-md-6 d-flex align-items-center">
                                <div class="row no-gutters">
                                    <div class="col-12 col-lg-6 mini-slider p-0 d-inline-block d-lg-flex justify-content-center align-items-center wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1s">
                                            <div><img src="minimal-creative/images/blog-img-1.jpg" alt="Blog-Image" class="w-100" /></div>
                                    </div>
                                    {/* <!-- Blog Box --> */}
                                    <div class="col-12 col-lg-6 p-0 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".1s">
                                        <a href="#contact-sec" class="text-decoration-none">
                                            <div class="blog-box bg-orange">
                                                <h1 class="box-text">Want to know about designing?</h1>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Blog End -->

                <!--Contact Start--> */}
                <section class="contact-sec bg-gray" id="contact-sec">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 col-lg-7">
                                <h4 class="heading text-center text-lg-left">Get In Touch</h4>
                                <form class="row contact-form wow fadeInLeft" id="contact-form-data">
                                    <div class="col-sm-12" id="result"></div>
                                    <div class="col-12 col-md-5">
                                        <input type="text" name="userName" placeholder="Your Name" class="form-control" />
                                        <input type="email" name="userEmail" placeholder="Email Address *" class="form-control" />
                                        <input type="text" name="userSubject" placeholder="Subject" class="form-control" />
                                    </div>
                                    <div class="col-12 col-md-7">
                                        <textarea class="form-control" name="userMessage" rows="6" placeholder="Your Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <a href="javascript:void(0);" class="btn btn-red rounded-pill w-100 contact_btn"><i class="fa fa-spinner fa-spin mr-2 d-none" aria-hidden="true"></i> <b>Send Message</b>
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div class="col-12 col-lg-5 text-center text-lg-left position-relative">
                                <div class="contact-details wow fadeInRight">
                                    <h4 class="heading">Our Location</h4>
                                    <p class="text">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered .
                                    </p>
                                    <ul>
                                        <li><i aria-hidden="true" class="fas fa-map-marker-alt"></i> 123 Park Avenue, New York, United States </li>
                                        <li><i aria-hidden="true" class="fas fa-phone-volume"></i>
                                            <span>+1 631 1234 5678</span>
                                            <span>+1 631 1234 5678</span>
                                        </li>
                                        <li><i aria-hidden="true" class="fas fa-paper-plane"></i>email@website.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!--Contact End-->

                <!--Footer Start--> */}
                <footer class="footer-style-1 bg-gray">
                    <div class="container">
                        <div class="row align-items-center">
                            {/* <!--Social--> */}
                            <div class="col-lg-6">
                                <div class="footer-social text-center text-lg-left ">
                                    <ul class="list-unstyled">
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-facebook-f"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-twitter"></i></a></li>
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-google-plus-g"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-linkedin-in"></i></a></li>
                                        <li><a class="wow fadeInUp" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-instagram"></i></a></li>
                                        <li><a class="wow fadeInDown" href="javascript:void(0);"><i aria-hidden="true" class="fab fa-pinterest-p"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!--Text--> */}
                            <div class="col-lg-6 text-center text-lg-right">
                                <p class="company-about fadeIn">© 2020 MegaOne. Made With Love By <a href="javascript:void(0);">Themesindustry</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!--Footer End-->

                <!--Animated Cursor--> */}
                <div id="animated-cursor">
                    <div id="cursor">
                        <div id="cursor-loader"></div>
                    </div>
                </div>

                {/* <!-- Fixed Menu --> */}
                <div class="fixed-nav-on-scroll fixed-nav-appear d-none sidemenu_toggle">
                    <div class="row no-gutters">
                        <div class="col-12 d-flex justify-content-center align-items-center position-relative">
                            <div class="fixed-icon-scroll">
                                <a class="menu_bars menu-bars-setting link mr-3 mr-lg-0">
                                    <div class="menu-lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;