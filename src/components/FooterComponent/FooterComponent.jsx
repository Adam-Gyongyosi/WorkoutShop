import "./FooterComponent.css";

export const FooterComponent = (props) => {
  return (
    <div className="footer-component">
      <footer class="text-light">
        <div class="p-3">
          <div class="row">
            <div class="col-6 col-md-1 text-center text-md-start"><a href="terms.html" class="text-light">Terms</a></div>
            <div class="col-6 col-md-1 text-center text-md-start"><a href="privacy.html" class="text-light">Privacy</a></div>
            <div class="text-center col-12 col-md-10 text-md-end"><p>Copyright 2022 @Workout Shop</p></div>
          </div>
          <div class="row text-center">
          <p class="mb-0">Photos from:
            <a href="https://www.pexels.com/?locale=en-us" class="text-light">Pexels.com</a>
            <a href="https://unsplash.com/" class="text-light">Unplash.com</a>
          </p>
          </div>
        </div>
      </footer>
    </div>
  )
};
