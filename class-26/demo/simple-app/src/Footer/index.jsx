// import React from 'react';

function Footer(props) {
  console.log(props);
  // we replace all the methods and values on 'this' with hooks.
  return (
    <footer>
      <p>Made by 401d52 &copy; {props.year}</p>
    </footer>
  )
}

export default Footer;
