import { useEffect } from 'react';
import './ScrollUp.css';
//ICON
import{ BiSolidUpArrowSquare } from 'react-icons/bi';

export const ScrollUp = () =>{
  
  useEffect(() => {
    window.addEventListener("scroll", function() {
      const scrollUp = document.querySelector(".scrollup");
      if (scrollUp) {
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
      }
    });
  }, [])

  return (
    <a href='#home' className='scrollup'>
      <BiSolidUpArrowSquare className='scrollup-icon' />
    </a>
    )
}