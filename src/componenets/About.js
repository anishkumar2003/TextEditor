import React from 'react'
// import photo from './images/photo2.png';
export default function About() {
  return (
    <>
    
    <div className="accordion container my-5" id="accordionExample">
  <div className="accordion-item border-5">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About this site</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Our text editor is a powerful tool designed to help you edit your text documents with ease. With a range of features to choose from, you can quickly and easily transform your text into the format you need.<br></br><br></br>
      One of the key features of our text editor is the ability to convert text to uppercase and lowercase. This is a great tool for when you need to change the case of your text for consistency or emphasis.
      </div>
    </div>
  </div>
  <div className="accordion-item border-5">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Services Provided</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      One of the key features of our text editor is the ability to convert text to uppercase and lowercase. This is a great tool for when you need to change the case of your text for consistency or emphasis.
      <br/><br/>
    In addition to case conversion, our text editor also allows you to remove extra spaces between words, ensuring that your text is clean and well-formatted.
    <br/><br/>
    Finally, our text editor can also convert your text into a PDF document. This is a great option for when you need to share your document with others or print it for distribution.
    <br/><br/>
    With all these features and more, our text editor is the perfect tool for anyone looking to edit and format their text documents quickly and efficiently.
      </div>
    </div>
  </div>
  <div className="accordion-item border-5">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Developer detail</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the Editor is developed by <code>Anish Kumar</code> </strong>
      </div>
    </div>
  </div>
</div>
    </>
  )
}
