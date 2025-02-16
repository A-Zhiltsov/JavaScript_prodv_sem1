// Создаем объект musicCollection
const musicCollection = {
    albums: [
      {
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        year: "1973",
      },
      {
        title: "Thriller",
        artist: "Michael Jackson",
        year: "1982",
      },
      {
        title: "Back in Black",
        artist: "AC/DC",
        year: "1980",
      },
    ],
  
    // Реализуем кастомный итератор
    [Symbol.iterator]() {
      let index = 0; // Текущий индекс для итерации
      const albums = this.albums; // Ссылка на массив альбомов
  
      return {
        next() {
          if (index < albums.length) {
            // Возвращаем текущий альбом и увеличиваем индекс
            return { value: albums[index++], done: false };
          } else {
            // Итерация завершена
            return { done: true };
          }
        },
      };
    },
  };

  for (const album of musicCollection) {
    console.log(`${album.title} - ${album.artist} (${album.year})`);
  }