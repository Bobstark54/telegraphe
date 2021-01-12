const ratio =.6;
const spies = document.querySelectorAll("[data-spy]");

let observer = null;
    // apply the active class
/**
 * 
 * @param {HTMLElement} elem 
 */
const activate = function(elem){
  const id = elem.getAttribute("id");
  const anchor = document.querySelector(`a[href="#${id}"]`);
  const navList = document.querySelector(`.nav-list`);
      // console.log(navList)
  if (anchor === null) {
      return null
  }
  else{
  navList
      .querySelectorAll(".active")
      // .forEach(node => node.classList.remove("nav-link-active")),
      .forEach(function(node){
          node.classList.remove("active")
      })
  anchor.classList.add("active")
  }
}

/**
 * 
 * @param {IntersectionObserverEntry[]} entries 
 */
const callback = function(entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting){
            activate(entry.target)
        }
    })
}

// defines the observer
/**
 * 
 * @param {NodeListOf.<Element>} elems 
 */
const observe = function (elems) {
    if (null!==observer){
        // elems.forEach(elem=>observer.unobserve(elem));
        elems.forEach(
            function(elem){
                observer.unobserve(elem)
            }
        )
    }
    const y = Math.round(window.innerHeight* ratio);
    observer=new IntersectionObserver(callback,{
        rootMargin:`-${window.innerHeight-y-1}px 0px -${y}px 0px`
    })
    spies.forEach(spy=>observer.observe(spy)
)}
    // Resizing the window
/**
 * 
 * @param {Function} callback 
 * @param {number} delay 
 * @return {Function}
 */
const debounce = function(callback, delay){
    let timer;
    return function(){
        let args = arguments;
        let context = this;
        clearTimeout(timer),timer=setTimeout(function(){
            callback.apply(context ,args)
        },delay)
    }
};

if(spies.length > 0) {
    observe(spies);
    let windowH = window.innerHeight;
    window.addEventListener("resize", debounce(function(){
        if (window.innerHeight !== windowH){
            (observe(spies),
            windowH = window.innerHeight)
        }
    },500))
}