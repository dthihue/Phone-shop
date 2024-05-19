document.querySelectorAll(".nav-link").forEach((nav) => {
  //lắng nghe sự kiện onclick
  nav.onclick = () => {
    // xóa các class active trước khi thêm vào
    document.querySelector(".nav-link__active").classList.remove("nav-link__active");
    //thêm class cho thẻ được click
    nav.classList.add("nav-link__active");
  };
});
