import React from "react";
function DiscoverNav() {
  return (
    <div className="container discover-nav">
      <nav class="nav nav-pills nav-fill p-3">
        <button class="nav-link rounded-pill active btn" aria-current="page">
          All
        </button>
        <a class="nav-link" href="#">
          Much longer nav link
        </a>
        <a class="nav-link" href="#">
          Link
        </a>
        <a
          class="nav-link disabled"
          href="#"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </nav>
    </div>
  );
}

export default DiscoverNav;
