function scrollToAccept() {
  const terms = document.querySelector(".terms-and-conditions");
  const button = document.querySelector('.accept')

  function obCallback(payload) {
    if(payload[0].intersectionRatio === 1) {
        button.disabled = false;
    };
  }
  const ob = new IntersectionObserver(obCallback, {
      root: terms,
      threshold: 1,
  });

  ob.observe(terms.lastElementChild);

  if (!terms) {
    return; //quit if no terms on the page
  }
  terms.addEventListener("scroll", function(e) {
    // console.log(e.currentTarget.scrollTop);
    // console.log(e.currentTarget.scrollHeight);
  });
}

scrollToAccept();
