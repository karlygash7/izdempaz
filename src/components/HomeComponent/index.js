import React, { useRef } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import './styles.css';
// import customFont from './fonts/CustomFont.ttf'; 
// jsPDF.addFont(customFont, 'CustomFont', 'normal');

const MyComponent = () => {
    const textRef = useRef(null);

    const handleButtonClick = () => {
    const text = textRef.current.value;
    const doc = new jsPDF();
   // doc.setFont('CustomFont');
    doc.setFontSize(12);
    doc.text('A fairy tale about a kid who lost his name', 10, 10);
    // A fairy tale about a kid who lost his name
    doc.text(text, 10, 20);
    doc.save("mypdf.pdf");
  };
  return (
    <div>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <section className="welcome-page">
        <div>
          <h1>Welcome to Izdempaz!</h1>
          <p>Personal books about each kid</p>
        </div>
      </section>
      <section className="upload-to-pdf">
        <div>
          <h1>Введите имя вашего ребенка</h1>
          <textarea className="textarea" ref={textRef} rows="5" cols="30" />
          <button className="button" onClick={handleButtonClick}>Посмотреть книгу</button>
        </div>
      </section>
      {/* Footer */}
      <footer>
        <div class="footer-made">
           <p>Made with ✨❤️ at nFactorial in 2023.</p>
        </div>
    </footer>
    </div>
  );
};

export default MyComponent;
