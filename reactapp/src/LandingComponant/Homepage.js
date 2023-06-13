import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';


let Homepage = () => {


  return (
    <div>

      {/* <div class="logo">
              <i class="fa fa-plane" aria-hidden="true"><span>Landing Page</span></i>
            </div> */}
      <a class="menu-toggle rounded" href="/">
        <i class="fa fa-bars"></i>
      </a>
      <nav id="sidebar-wrapper">
        <ul class="sidebar-nav">
          <li class="sidebar-brand">
            <a class="smooth-scroll" href="#Header"></a>
          </li>

          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Banner">Home</a>
          </li>

          <li class="sidebar-nav-item">
            {/* <a class="smooth-scroll" href="/login">Login</a> */}
            <Link to="/login" >Login</Link>

          </li>

          <li class="sidebar-nav-item">
            {/* <a class="smooth-scroll" href="#page-top">Signup</a> */}
            {/* <Link to="/signup" >Signup</Link> */}

            <Dropdown >
              <Dropdown.Toggle >
                {/* <Link to="/signup" >Signup</Link> */}
                Signup
              </Dropdown.Toggle>

              <Dropdown.Menu aria-labelledby="dropdownMenuButton">
                <Dropdown.Item >
                  <Link to="/patientsignup" >Patient</Link>
                </Dropdown.Item>
                <Dropdown.Item >
                  <Link to="/hospitalregisteration" > Hospital </Link>
                </Dropdown.Item>
                <Dropdown.Item >
                  <Link to="/ambulanceregisteration" >  Ambulance </Link>
                </Dropdown.Item>
                {/* </Dropdown.Menu> */}

                {/* <Dropdown.Item >
                <Link to="/" >  BloodBank </Link>
                  </Dropdown.Item> */}
              </Dropdown.Menu>

            </Dropdown>


          </li>


          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#About">About</a>
          </li>
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Services">Services</a>
          </li>
          {/* 
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Portfolio">Portfolio</a>
          </li>
          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Testimonials">Testimonials</a>
          </li> */}

          <li class="sidebar-nav-item">
            <a class="smooth-scroll" href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section id="Banner" class="content-section">
        <div class="container content-wrap text-center">
          {/* <h1>Reactjs Bootstrap Template</h1> */}
          {/* <h1 style={ {color: 'yellow'} }>Digital Health Ecoystem</h1> */}
          <h1>Digital Health Ecoystem</h1>


          <h3>
            {/* <em>A Bootstrap Theme to start building a new landing page</em> */}
            <em>Your Happiness Is A Reflection Of Your Health</em>

          </h3>
          <a class="btn btn-primary btn-xl smooth-scroll" href="#About">Find Out More</a>
        </div>
        <div class="overlay"></div>
      </section>

      <section id="About" class="content-section">
        <div class="container text-center">
          <div class="row">
            <div class="col-lg-12">
              <div class="block-heading">
                <h2>About Us</h2>
              </div>
              {/* <p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
              <h5>Making health care better together</h5>
              <p class="lead"> We provide an efficient and user-friendly  way for healthcare system and related required medicines and facilities in this era of  pandemic to save lives of patients. </p>

            </div>
          </div>
        </div>
      </section>

      <section id="Services" class="content-section text-center">
        <div class="container ">
          <div class="block-heading">
            {/* <h2>What We Offer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
            <h5>Our Services</h5>
          </div >
          {/* <div style={}> */}
          <div class="row  justify-content-center " >
            <div class="col-md-4 col-sm-8">
              <div class="service-box ">
                <div class="service-icon yellow">
                  <div class="front-content">
                    <i class="fa fa-globe" aria-hidden="true"></i>
                    {/* <h3>Family </h3> */}
                    <h3>Hospitals</h3>
                  </div>
                </div>
                <div class="service-content">
                  {/* <h3>Family Travel</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                       */}
                  <h3>Hospitals</h3>
                  <p> A hospital is a healthcare facility that provides specialized medical and nursing care as well as medical supplies to patients. The most well-known form of the hospital is the general hospital, which usually carries an emergency department to handle urgent health issues such as fire and accident victims, as well as medical emergencies.</p>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-8">
              <div class="service-box">
                <div class="service-icon orange">
                  <div class="front-content">
                    <i class="fa fa-suitcase"></i>
                    {/* <h3>Business </h3> */}
                    <h3>Ambulance </h3>

                  </div>
                </div>
                <div class="service-content">
                  {/* <h3>Business Travel</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                      */}
                  <h3>Ambulance</h3>
                  <p>Emergency pre-hospital medical response provider. Patient Transport is integral to the ongoing, effective delivery of services</p>
                </div>
              </div>

              {/* </div>   */}
              {/* //// */}

            </div>

            {/* Enter BLOODBANK SERV IF POSIIBLE HERE */}
            {/* <div class="col-md-3 col-sm-6">
                    <div class="service-box ">
                      <div class="service-icon red">
                        <div class="front-content">
                          <i class="fa fa-male" aria-hidden="true"></i>
                          <h3>Solo Travel</h3>
                          
                        </div>
                      </div>
                      <div class="service-content">
                        <h3>Solo Travel</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3 col-sm-6">
                    <div class="service-box">
                      <div class="service-icon grey">
                        <div class="front-content">
                          <i class="fa fa-users"></i>
                          <h3>Camping</h3>
                        </div>
                      </div>
                      <div class="service-content">
                        <h3>Camping</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                      </div>
                    </div>
                  </div>
                  */}

          </div>
        </div>

      </section>

      {/* <section class="content-section text-center" id="Portfolio">
              <div class="container">
                <div class="block-heading">
                  <h2>Portfolio</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div class="portfolio-wrapper clearfix">
                  <a class="each-portfolio" data-fancybox="gallery" href="images/p-two.jpeg">
                    <div class="content hover-cont-wrap">
                      <div class="content-overlay"></div>
                      <img class="content-image" src="assets/images/p-two.jpeg" />
                      <div class="content-details fadeIn-bottom">
                        <h5 class="p-title">Title</h5>
                        <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span class="zoom"><i class="fa fa-search-plus"></i></span>
                      </div>
                    </div>
                  </a>
                  <a class="each-portfolio" data-fancybox="gallery" href="images/p-three.jpeg">
                    <div class="content hover-cont-wrap">
                      <div class="content-overlay"></div>
                      <img class="content-image" src="assets/images/p-three.jpeg" />
                      <div class="content-details fadeIn-bottom">
                        <h5 class="p-title">Title</h5>
                        <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span class="zoom"><i class="fa fa-search-plus"></i></span>
                      </div>
                    </div>
                  </a>
                  <a class="each-portfolio" data-fancybox="gallery" href="images/p-four.jpeg">
                    <div class="content hover-cont-wrap">
                      <div class="content-overlay"></div>
                      <img class="content-image" src="assets/images/p-four.jpeg" />
                      <div class="content-details fadeIn-bottom">
                        <h5 class="p-title">Title</h5>
                        <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span class="zoom"><i class="fa fa-search-plus"></i></span>
                      </div>
                    </div>
                  </a>
                  <a class="each-portfolio" data-fancybox="gallery" href="images/p-five.jpeg">
                    <div class="content hover-cont-wrap">
                      <div class="content-overlay"></div>
                      <img class="content-image" src="assets/images/p-five.jpeg" />
                      <div class="content-details fadeIn-bottom">
                        <h5 class="p-title">Title</h5>
                        <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span class="zoom"><i class="fa fa-search-plus"></i></span>
                      </div>
                    </div>
                  </a>
                  <a class="each-portfolio" data-fancybox="gallery" href="images/p-six.jpeg">
                    <div class="content hover-cont-wrap">
                      <div class="content-overlay"></div>
                      <img class="content-image" src="assets/images/p-six.jpeg" />
                      <div class="content-details fadeIn-bottom">
                        <h5 class="p-title">Title</h5>
                        <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span class="zoom"><i class="fa fa-search-plus"></i></span>
                      </div>
                    </div>
                  </a>
                  <a class="each-portfolio" data-fancybox="gallery" href="images/p-three.jpeg">
                    <div class="content hover-cont-wrap">
                      <div class="content-overlay"></div>
                      <img class="content-image" src="assets/images/p-three.jpeg" />
                      <div class="content-details fadeIn-bottom">
                        <h5 class="p-title">Title</h5>
                        <p class="p-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <span class="zoom"><i class="fa fa-search-plus"></i></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            
            <section id="Testimonials" class="content-section">
              <div class="container">
                <div class="row">
                  <div class="col-sm-12">
                    <div class="block-heading">
                      <h2>Testimonials</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                    <div id="customers-testimonials" class="owl-carousel">
                      <div class="item">
                        <div class="shadow-effect">
                          <img class="img-circle" src="assets/images/sarah.jpg" alt="" />
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                        </div>
                        <div class="testimonial-name">Sarah Jenks</div>
                      </div>
                      <div class="item">
                        <div class="shadow-effect">
                          <img class="img-circle" src="assets/images/tangelia.jpg" alt="" />
                          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                        </div>
                        <div class="testimonial-name">Tangelia Ekhoff</div>
                      </div>
                      <div class="item">
                        <div class="shadow-effect">
                          <img class="img-circle" src="assets/images/john-doe.jpg" alt="" />
                          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <div class="testimonial-name">John Doe</div>
                      </div>
                      <div class="item">
                        <div class="shadow-effect">
                          <img class="img-circle" src="assets/images/amy.jpg" alt="" />
                          <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words</p>
                        </div>
                        <div class="testimonial-name">Amy Tan</div>
                      </div>
                      <div class="item">
                        <div class="shadow-effect">
                          <img class="img-circle" src="assets/images/daniel.jpg" alt="" />
                          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
                        </div>
                        <div class="testimonial-name">Daniel Felsted</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

      <section id="Contact" class="content-section">
        <div class="container">
          <div class="block-heading">
            <h2>Contact Us</h2>

          </div>

          {/* <div class="row"> */}
          {/* <div class="col-sm-12 col-md-6 col-lg-6"> */}
          {/* <div class=""> */}

          <div class="contact-wrapper">
            {/* <div class="address-block border-bottom"> */}
            {/* <div class="address-block "> */}

            {/* <h3 class="add-title">Headquaters</h3> */}
            <h3 class="add-title">Address</h3>
            <div class="c-detail">
              {/* <span class="c-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span><span class="c-info"> Street </span> */}
              <span class="c-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span><span class="c-info"> 	Training Center
                Office No:2, 1st Floor, Gokhale Sanchit, Above Hotel Aamaya, BMCC Road, Deccan Gymkhana, Pune: 411004 </span>

            </div>
            <div class="c-detail">
              {/* <span class="c-icon"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="c-info">+0000000000</span> */}
              <span class="c-icon"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="c-info">020-25648081/82
              </span>

            </div>
            <div class="c-detail">
              {/* <span class="c-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span><span class="c-info">email@yourdomain.com</span> */}
              <span class="c-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span><span class="c-info">
                info@know-it.co.in
              </span>

            </div>
            {/* </div> */}

            {/* BRANCH BLOCK REMOVES HERE */}
            {/* <div class="address-block">
                        <h3 class="add-title">Branch</h3>
                        <div class="c-detail">
                          <span class="c-icon"><i class="fa fa-map-marker" aria-hidden="true"></i></span><span class="c-info"> 985698 Street</span>
                        </div>
                        <div class="c-detail">
                          <span class="c-icon"><i class="fa fa-phone" aria-hidden="true"></i></span><span class="c-info">+0000000000</span>
                        </div>
                        <div class="c-detail">
                          <span class="c-icon"><i class="fa fa-envelope" aria-hidden="true"></i></span><span class="c-info">email@yourdomain.com</span>
                        </div>
                      </div> */}
          </div>
          {/* </div> */}

          {/* NAME ADDMO NO AND SUBMIT button REMOVED */}
          {/* <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="form-wrap">
                      <form action="javascript:void(0)" method="post">
                        <div class="fname floating-label">
                          <input type="text" class="floating-input" name="full name" />
                          <label for="title">First Name</label>
                        </div>
                        <div class="fname floating-label">
                          <input type="text" class="floating-input" name="full name" />
                          <label for="title">Last Name</label>
                        </div>
                        <div class="email floating-label">
                          <input type="email" class="floating-input" name="email" />
                          <label for="email">Email</label>
                        </div>
                        <div class="contact floating-label">
                          <input type="tel" class="floating-input" name="contact" />
                          <label for="email">Mobile</label>
                        </div>
                        <div class="company floating-label">
                          <textarea type="text" class="floating-input" name="company"></textarea>
                          <label for="email">Message</label>
                        </div>
                        <div class="submit-btn">
                          <button type="submit">Submit</button>
                        </div>
                      </form>
                    </div>
                  </div> */}

          {/* </div> */}
        </div>

      </section>
      <footer class="footer text-center">
        <div class="container">
          <ul class="list-inline">
            <li class="list-inline-item">
              {/* <a class="social-link rounded-circle text-white mr-3" href="javascript:void(0)"> */}
              <a class="social-link rounded-circle text-white mr-3" href="#">

                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              {/* <a class="social-link rounded-circle text-white mr-3" href="javascript:void(0)"> */}
              <a class="social-link rounded-circle text-white mr-3" href="#">

                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li class="list-inline-item">
              {/* <a class="social-link rounded-circle text-white" href="javascript:void(0)"> */}
              <a class="social-link rounded-circle text-white mr-3" href="#">

                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
          <p class="text-muted small mb-0">Copyright @Digital Health Ecoystem</p>

        </div>
      </footer>

    </div>

  )

}
export default Homepage;