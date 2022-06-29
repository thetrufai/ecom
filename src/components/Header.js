import React from "react";

function Header() {
  return (
    <div>
      <header class="row">
        <div>
          <a href="index.html" class="brand">
            {" "}
            Amazon
          </a>
        </div>
        <div>
          <a href="">Cart</a>
          <a href="">Sign In</a>
        </div>
      </header>
    </div>
  );
}

export default Header;
