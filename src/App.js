// import axios from 'axios';
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { Loader } from "@googlemaps/js-api-loader"

const options = {
  method: 'GET',
  url: 'https://free-news.p.rapidapi.com/v1/search',
  params: {q: 'Elon Musk', lang: 'en'},
  headers: {
    'x-rapidapi-host': 'free-news.p.rapidapi.com',
    'x-rapidapi-key': '95f2f09b5dmsh9c81a3c4ee1f935p1a3ff5jsna3b334f60855'
  }
};


const loader = new Loader({
  apiKey: "AIzaSyAiQlZrgFDR0k7PCFz8KIymruCKHVwim1s",
  version: "weekly",
  // ...additionalOptions,
});



function App() {
  const [search, setSearch] = useState('Elon')
  const [articles, setArticles] = useState([])

  let map

  const fetchMapLocation = () => {
    loader.load().then(() => {
      // console.log('loading')
      // ° S, ° E
      map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 0.4371, lng: 36.9580 },
        zoom: 8,
      });
    });
  }
  useEffect(() => {

    fetchMapLocation()

    // axiosRequest('GET', 'Elon Musk', 'en')
    const fetchNews = async () => {


      
      // const data = await axios.get('')
      // console.log({ data })
      // fetch('https://jsonplaceholder.typicode.com/users') 
      // Handle success .then(response => response.json()) 
      // convert to json .then(json => console.log(json)) 
      //print data to console .catch(err => console.log('Request Failed', err));

      // fetch(`https://free-news.p.rapidapi.com/v1/search?q=${search}&lang=en`, {
      //   "method": "GET",
      //   "headers": {
      //     "x-rapidapi-host": "free-news.p.rapidapi.com",
      //     "x-rapidapi-key": "95f2f09b5dmsh9c81a3c4ee1f935p1a3ff5jsna3b334f60855"
      //   }
      // })
      // .then(response => response.json())
      // .then((jsonData) => {
      //   console.log({ jsonData })
      //   // set state
      //   if(Array.isArray(jsonData.articles)) {
      //     setArticles(jsonData.articles)
      //   } else {
      //     // display
      //   }
      // })
      // .catch(err => {
      //   console.error(err);
      // });

      // axios.request(options).then(function (response) {
      //   console.log({ data: response.data.articles });
      //   setArticles(response.data.articles)
      // }).catch(function (error) {
      //   console.error(error);
      // });

    }

    fetchNews()
  }, [])


  console.log({ map })

  return (
    <div className="App">
      <div id="map" style={{ width: '80vw', height: '80vh'}}>

      </div>
     <div className="data">
       {
         articles.length > 0 &&
         articles.map((article, index) => {
           return (
             <div key={index}>
               <h1>{article.author}</h1>
               <p>{article.summary}</p>
            </div>
           )
         })
       }
     </div>
    </div>
  );
}

export default App;
