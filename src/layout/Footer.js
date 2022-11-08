const Footer = () => {
  return (
    <footer className="footer">
      <div className="copy">
       {/* <a target="_blank" href="mailto:27dagar@gmail.com" rel="noopener noreferrer"> <p>E: 27dagar@gmail.com</p></a> */}
      
        <p>With ♡ from India</p>
          <p>© <a href="https://www.mohitdagar.tech">MJZD7</a>, All Rights Reserved </p>
      </div>
      <div className="soc-box">
        <div className="follow-label">Let's Connect</div>
        <div className="soc">
          <a target="_blank" rel="noreferrer" href="https:/www.linkedin.com/in/mohit-dagar/">
            <span className="icon fab fa-linkedin" />
          </a>
           <a target="_blank" rel="noreferrer" href="https:/wa.me/9953953168">
            <span className="icon fab fa-whatsapp" />
          </a>
           <a target="_blank" rel="noreferrer" href="https://github.com/mjzd7">
            <span className="icon fab fa-github" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_mohit_dagar">
            <span className="icon fab fa-instagram" />
          </a>
           <a target="_blank" rel="noreferrer" href="https://twitter.com/mjzd7">
            <span className="icon fab fa-twitter" />
          </a>
          <a target="_blank" rel="noreferrer" href="https://t.me/mohitdagar1">
            <span className="icon fab fa-telegram" />
          </a>
        </div>
      </div>
      <div className="clear" />
    </footer>
  );
};
export default Footer;
