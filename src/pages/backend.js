import React, { useState } from 'react';
import productsData from '../data/productsData'; // Assicurati di avere accesso ai dati
import './Backend.css'; // Crea un file CSS per lo stile della pagina

function Backend() {
  const [formData, setFormData] = useState({
    img: null,
    name: '',
    description: '',
    price: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      img: e.target.files[0] // Gestisci il file caricato
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validazione dei dati
    if (!formData.img || !formData.name || !formData.description || !formData.price) {
      setMessage('Tutti i campi devono essere compilati');
      return;
    }

    // Aggiungi l'articolo all'array di prodotti
    const newProduct = {
      id: productsData.length + 1, // Assicurati che l'ID sia univoco
      img: formData.img.name, // Salva solo il nome del file
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price)
    };

    productsData.push(newProduct);
    
    // Resetta il form
    setFormData({
      img: null,
      name: '',
      description: '',
      price: ''
    });
    
    setMessage('Articolo aggiunto con successo!');
  };

  return (
    <div className="backend-container">
      <h1>Aggiungi un Nuovo Articolo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Immagine Articolo:</label>
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descrizione:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Prezzo:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Aggiungi Articolo</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Backend;
