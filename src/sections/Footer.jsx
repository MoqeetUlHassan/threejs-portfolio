const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <a href="/terms" className="hover:underline">Terms & Conditions</a>
        <p>|</p>
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/MoqeetUlHassan" className="social-icon">
          <img src={`${import.meta.env.BASE_URL}assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a href="https://x.com/moqeet1998" className="social-icon">
          <img src={`${import.meta.env.BASE_URL}assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.instagram.com/nugatorypoetry/" className="social-icon">
          <img src={`${import.meta.env.BASE_URL}assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/moqeet-ul-hassan/" className="social-icon">
          <img src={`${import.meta.env.BASE_URL}assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2024 Moqeet Ul Hassan. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
