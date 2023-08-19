  const ScrollShadow = () => {
    return (<script>{
      window.addEventListener('scroll', function() {
        if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
          document.getElementById("nav").classList.add("shadow");
        } else {
          document.getElementById("nav").classList.remove("shadow");
        }
      })
    }</script>
    )
  };
  
  export default ScrollShadow;