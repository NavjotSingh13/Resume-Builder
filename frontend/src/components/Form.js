import React, { useState } from 'react';
import jsPDF from 'jspdf';

const Form = () => {
  const [name, setName] = useState("");

  const doc = new jsPDF({
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
      <input type="submit" />
    </form>
  )
}

export default Form;