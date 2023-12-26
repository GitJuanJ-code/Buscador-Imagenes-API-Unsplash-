import React, { useState } from 'react';

const ImageList: React.FC = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState<any[]>([]); // Array para almacenar las imágenes

  const searchImages = async () => {
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&client_id=uuWSw4BD4LmSWF5wFjOuLLzRvz7xa8yGb3_3y6J_Wvc`);
      const data = await response.json();
      setImages(data.results); // Actualiza el estado con las imágenes obtenidas
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchImages();
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar imágenes..."
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="image-grid">
        {images.map((image) => (
          <img key={image.id} src={image.urls.small} alt={image.alt_description} />
        ))}
      </div>
    </div>
  );
};

export default ImageList;
