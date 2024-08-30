import React, { useState, useEffect } from 'react';

const items = [
  {
    id: 1,
    imageUrl:
      'https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=',
    title: 'Item 1',
    description: 'Description of item 1',
  },
  {
    id: 2,
    imageUrl:
      'https://thumbs.dreamstime.com/b/sea-water-ocean-wave-surfing-surface-colorful-vibrant-sunset-barrel-shape-124362369.jpg',
    title: 'Item 2',
    description: 'Description of item 2',
  },
  {
    id: 3,
    imageUrl:
      'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Item 3',
    description: 'Description of item 3',
  },
];

const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(0);

  function nextItem() {
    if (currentItem === items.length - 1) {
      setCurrentItem(0);
    } else {
      setCurrentItem((curr) => curr + 1);
    }
  }

  function prevItem() {
    if (currentItem === 0) {
      setCurrentItem(items.length - 1);
    } else {
      setCurrentItem((curr) => curr - 1);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextItem();
    }, 2000);
    return () => clearInterval(timer);
  }, [currentItem]);

  return (
    <div className="carousel row">
      <h1>Carousel</h1>
      <span className='col-md-2'>
      <button onClick={prevItem}>Prev</button>

      </span>
      <div className="carousel-item col-md-6">
        <img
          height="250"
          width="400"
          src={items[currentItem].imageUrl}
          alt={items[currentItem].title}
        />
        <h2>{items[currentItem].title}</h2>
        <p>{items[currentItem].description}</p>
      </div>

      <span className='col-md-2'>
      <button onClick={nextItem}>Next</button>

      </span>
    
    </div>
  );
};

export default Carousel;
