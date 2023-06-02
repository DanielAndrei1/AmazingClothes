import './Showcase.css';
import MainShowcase from './Images/MainShowcase.png'
import SecondShowcase from './Images/SecondShowcase.png'
import ThirdShowcase from './Images/ThirdShowcase.png'
import { useEffect } from 'react';
import { Card } from "react-bootstrap"


function Showcase() {

    useEffect(()=>{
        var slideIndex = 0;
        showSlides();
        
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}    
    
            slides[slideIndex-1].style.display = "block";  
            setTimeout(showSlides, 8000); // Change image every 2 seconds
        }
        
        }, [])
   
    return (

        
      <div className="Showcase">
               <div className='horizontalLine'></div> 

        <div className="slideshow-container" >
      
        <div className="mySlides" >
        <Card>
          <Card.Img variant="top" src={MainShowcase} height="800px"  style={{ objectFit: "cover"}} priority="high" loading="eager" />
        </Card> 
        </div>

        <div className="mySlides">
        <Card>
          <Card.Img variant="top" src={SecondShowcase} height="800px" style={{ objectFit: "cover"}} priority="high" loading="eager" />
        </Card> 
        </div>

        <div className="mySlides">
        <Card>
          <Card.Img variant="top" src={ThirdShowcase} height="800px" style={{ objectFit: "cover"}} priority="high" loading="eager" />
        </Card> 
        </div>

        </div>


        <div className='showCase'>
                <p></p>
                <p></p>
            </div>
      </div>
    );

    
  }

export default Showcase;