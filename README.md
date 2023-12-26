# Buscador de Imágenes

Este es un proyecto de buscador de imágenes que utiliza la API de Unsplash para mostrar imágenes según la consulta realizada.

## Instalación

1. Clona este repositorio: `git clone https://github.com/tu_usuario/tu_repositorio.git`
2. Ve al directorio del proyecto: `cd tu_repositorio`
3. Instala las dependencias: `npm install` o `yarn install`

## Uso

1. Obtén una clave de acceso a la API de Unsplash [aquí](https://unsplash.com/developers).
2. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de acceso:

REACT_APP_UNSPLASH_ACCESS_KEY=tu_clave_de_acceso


3. Inicia la aplicación: `npm start` o `yarn start`
4. Abre tu navegador e ingresa consultas para buscar imágenes.

## Estructura del Proyecto

- `App.tsx`: El componente principal que contiene la interfaz de usuario.
- `ImageList.tsx`: Componente para manejar la búsqueda y visualización de imágenes.

## Componentes Principales

### `App.tsx`

```tsx
import React from 'react';
import './style/estilo.css';
import ImageList from './components/ImageList';

const App: React.FC = () => {
return (
 <div className="container">
   <h1>Buscador de Imágenes </h1>
   <ImageList />
 </div>
);
};

export default App;
```
### `ImageList.tsx`

```tsx
import React, { useState } from 'react';

const ImageList: React.FC = () => {
  // ... (código del componente ImageList)
};

export default ImageList;
```

## Notas
Este proyecto utiliza React y la API de Unsplash para mostrar imágenes. Asegúrate de tener una conexión a Internet para poder realizar búsquedas.
Se recomienda manejar adecuadamente las claves de acceso a la API y no compartirlas públicamente.
