import dotenv from 'dotenv';

dotenv.config();

const TMDB = {
  api_key: '85cd5e63356ff0dc25f30b35f77d2140',
  
  films: [
    {
      "id": 812,
        "title": "Jafar",
        "imagesvillain" : "https://vignette.wikia.nocookie.net/villains/images/e/e5/Aladdin-disneyscreencaps_com-1535.jpeg/revision/latest/scale-to-width-down/1000?cb=20150415170322",
        "song": "https://youtu.be/eGD2m-nnyL4"
    },
    {
      "id": 8587,
      "imagesvillain" : "https://wallpapercave.com/wp/wp4109990.jpg",
      "title": "Scar",
      "song": "https://youtu.be/zPUe7O3ODHQ",

        
    },
    {
      "id": 10882,
      "imagesvillain" : "https://vignette.wikia.nocookie.net/disney/images/0/05/Profile_-_Maleficent.jpeg/revision/latest/scale-to-width-down/516?cb=20190312020410",
        "title": "maleficent",
        "song": "https://youtu.be/OCjn4qoYmD0"
    },
    
  ]
}

export default TMDB