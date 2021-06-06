import React from "react";
function Footer() {
  var currYear = new Date().getFullYear();
  return (
    <div className="footer">
      <footer>
        <p>Copyright @ {currYear}</p>
      </footer>
    </div>
  );
}
export default Footer;
