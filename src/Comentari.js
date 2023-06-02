import './Comentari.css';
import $ from "jquery";
import ReCAPTCHA from 'react-google-recaptcha';
import React from 'react';

function Comentari() {
  var elementClicked = false;

   function clickFunction() {
    elementClicked = true;
    if( elementClicked == true ) {
      $("#comentariu").removeClass("d-none")
      elementClicked = false;
    }
  };



    return (
      <div className='form'>

        <h3>Adauga un comentariu</h3>
        
 
          <div className="textArea">
          <textarea rows="4"  role="button" name="mesaj" placeholder="Scrieti"></textarea>


          </div>
            <br/>
         


          <br/>
         
            <button className="submitButton" onClick={clickFunction} title="adauga">Adauga</button>

       <p className='d-none' id="comentariu">Comentariul dvs va parea dupa ce va fi aprobat.</p>
          
</div>
    
      
    );
  }

export default Comentari;