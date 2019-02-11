<template>
  <footer class="footer footer-big footer-color-black" data-color="black">
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-sm-3">
          <div class="info">
            <h5 class="title">EdEra Technologies</h5>
            <nav>
              <ul>
                <li>
                  <a href="#">Home</a></li>
                <li>
                  <a href="#whoweare">Who We Are</a>
                </li>
                <li>
                  <a href="#whatwedo">What We Do</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-md-3 col-md-offset-1 col-sm-3">
          <div class="info">
            <h5 class="title"> Help and Support</h5>
            <nav>
              <ul>
                <li>
                  <a href="mailto:olga.filipova@ed-era.com">Contact Us</a>
                </li>
                <!--<li>-->
                  <!--<a href="#">How it works</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="#">Terms &amp; Conditions</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="#">Company Policy</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="#">Money Back</a>-->
                <!--</li>-->
              </ul>
            </nav>
          </div>
        </div>
        <!--<div class="col-md-3 col-sm-3">-->
          <!--<div class="info">-->
            <!--<h5 class="title">Latest News</h5>-->
            <!--<nav>-->
              <!--<ul>-->
                <!--<li>-->
                  <!--<a href="#">-->
                    <!--<i class="fa fa-twitter"></i> <b>Get Shit Done</b> The best kit in the market is here, just give it a try and let us...-->
                    <!--<hr class="hr-small">-->
                  <!--</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="#">-->
                    <!--<i class="fa fa-twitter"></i> We've just been featured on <b> Awwwards Website</b>! Thank you everybody for...-->
                  <!--</a>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</nav>-->
          <!--</div>-->
        <!--</div>-->
        <div class="col-md-2 col-md-offset-1 col-sm-3">
          <div class="info">
            <h5 class="title">Follow us on</h5>
            <nav>
              <ul>
                <li>
                  <a href="https://www.facebook.com/EdEraUa/" target="_blank" class="btn btn-social btn-facebook btn-simple">
                    <i class="fa fa-facebook-square"></i> Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/EderaEducation" target="_blank" class="btn btn-social btn-dribbble btn-simple">
                    <i class="fa fa-youtube"></i> Youtube
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/edera_ua" target="_blank" class="btn btn-social btn-twitter btn-simple">
                    <i class="fa fa-twitter"></i> Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/edera_ua/" target="_blank" class="btn btn-social btn-reddit btn-simple">
                    <i class="fa fa-instagram"></i> Instagram
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <hr>
      <div class="copyright">
        © {{ footerDate }} EdEra Technologies &hearts;
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        footerDate: new Date().getFullYear()
      }
    }
  }
</script>
