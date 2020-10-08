import Vue from 'vue'

Vue.directive('scroll-observer', {
  bind (el, binding, vnode) {
    if (binding.arg === 'animation-left') {
      el.classList.add('left-enter')
      animatedScrollObserver.observe(el)
    } else if (binding.arg === 'animation-right') {
      el.classList.add('right-enter')
      animatedScrollObserver.observe(el)
    } else if (binding.arg === 'animation-up') {
      el.classList.add('up-enter')
      animatedScrollObserver.observe(el)
    }
  }
})

const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    /*
        Looping through all entries, which are observed.
      */
    entries.forEach((entry) => {
      /*
          With this condition, we check whether the element is in the current viewport,
          respectively if the entry intersects with the viewport.
          If true, then we add the enter class and call the unobserve function.
          Because we don’t have to observe it anymore.
        */
      if (entry.isIntersecting) {
        entry.target.classList.add('enter')
        // animatedScrollObserver.unobserve(entry.target);
      } else {
        entry.target.classList.remove('enter')
      }
    })
  }
)
