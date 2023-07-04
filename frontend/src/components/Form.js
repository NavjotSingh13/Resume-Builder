import React, { useState } from 'react';
import jsPDF from 'jspdf';

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    doc.html(name, {
      async callback(doc) {
        await doc.save('pdf_name');
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Enter your Email:
        <input 
          type="text" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  )
}

export default Form;