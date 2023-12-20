var firebaseConfig = {
    apiKey: "AIzaSyD2kaMkrUSMF7xBm0UN0tYWdr5bE3JlZ6Y",
    authDomain: "dbms--music.firebaseapp.com",
    projectId: "dbms--music",
    storageBucket: "dbms--music.appspot.com",
    messagingSenderId: "40044824261",
    appId: "1:40044824261:web:9cacf3d3086adf160112ac",
    measurementId: "G-6DYJF6S7T3",
    databaseURL: "https://dbms--music-default-rtdb.firebaseio.com/" 
  };

  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  //Malayalam
  document.addEventListener('DOMContentLoaded', function() {
    const songsRef = database.ref('Songs/Malayalam');
  
    songsRef.once('value', snapshot => {
      const songsData = snapshot.val();
  
      for (const key in songsData) {
        if (songsData.hasOwnProperty(key)) {
          const song = songsData[key];
        //   setupPlayButton(key, song);
          
          const songId = `song${key}`;
          const songTitleElement = document.getElementById(songId);
          const songAuthorElement = document.getElementById(`author${key}`);
          const imageElement = document.getElementById(`image${key}`);
          // console.log(song)
  
          if (songTitleElement && songAuthorElement && imageElement) {
            songTitleElement.textContent = song.songName || 'Unknown Song';
            songAuthorElement.textContent = song.author || 'Unknown Author';
            imageElement.src = song.img || 'default_image_url.jpg';
          } else {
            console.log(`Elements not found for song${key}`);
          }
        }
      }
    }, error => {
      console.error('There was a problem fetching the data:', error);
    });
  });

  //English
  document.addEventListener('DOMContentLoaded', function() {
    const songsRef = database.ref('Songs/English');
  
    songsRef.once('value', snapshot => {
      const songsData = snapshot.val();
  
      for (const key in songsData) {
        if (songsData.hasOwnProperty(key)) {
          const song = songsData[key];
        //   setupPlayButton(key, song);
        console.log(song);
          
          const songId = `song1${key}`;
        console.log('id',songId);

          const songTitleElement = document.getElementById(songId);
          console.log('title',songTitleElement);
          const songAuthorElement = document.getElementById(`author1${key}`);
          console.log('author',songAuthorElement);
          const imageElement = document.getElementById(`image1${key}`);
          console.log('image',imageElement);
          // console.log(song)
  
          if (songTitleElement && songAuthorElement && imageElement) {
            songTitleElement.textContent = song.songName || 'Unknown Song';
            songAuthorElement.textContent = song.author || 'Unknown Author';
            imageElement.src = song.img || 'default_image_url.jpg';
          } else {
            console.log(`Elements not found for song${key}`);
          }
        }
      }
    }, error => {
      console.error('There was a problem fetching the data:', error);
    });
  });

  //Hindi
  document.addEventListener('DOMContentLoaded', function() {
    const songsRef = database.ref('Songs/Hindi');
  
    songsRef.once('value', snapshot => {
      const songsData = snapshot.val();
      console.log(songsData);

  
      for (const key in songsData) {
        if (songsData.hasOwnProperty(key)) {
          const song = songsData[key];
        //   setupPlayButton(key, song);
        console.log(song);
          
          const songId = `song11${key}`;
        console.log('id',songId);

          const songTitleElement = document.getElementById(songId);
          console.log('title',songTitleElement);
          const songAuthorElement = document.getElementById(`author11${key}`);
          console.log('author',songAuthorElement);
          const imageElement = document.getElementById(`image11${key}`);
          console.log('image',imageElement);
          // console.log(song)
  
          if (songTitleElement && songAuthorElement && imageElement) {
            songTitleElement.textContent = song.songName || 'Unknown Song';
            songAuthorElement.textContent = song.author || 'Unknown Author';
            imageElement.src = song.img || 'default_image_url.jpg';
          } else {
            console.log(`Elements not found for song${key}`);
          }
        }
      }
    }, error => {
      console.error('There was a problem fetching the data:', error);
    });
  });





  



document.addEventListener('DOMContentLoaded', function() {
    // Check if the user name exists in local storage
    const userName = localStorage.getItem('name');
  
    // If the user name exists, update the login button's text
    if (userName) {
      const loginButton = document.querySelector('.navbar button');
      loginButton.textContent = `Welcome, ${userName}`; // Set the user name in place of 'Log In'
    }
  });
  





  function handlePlay(section) {
    const playButtons = document.querySelectorAll(`.fa.fa-play.${section}`);
    
    playButtons.forEach((button, index) => {
        const songRef = database.ref(`Songs/${section}/${index + 1}/song${index + 1}`);
        let audio = null;
        
        button.addEventListener('click', async () => {
            songRef.once('value', snapshot => {
                const songData = snapshot.val();
                
                if (songData) {
                    if (audio && !audio.paused) {
                        audio.pause();
                        button.classList.remove('fa-pause');
                        button.classList.add('fa-play');
                    } else {
                        audio = new Audio(songData);
                        audio.play();
                        button.classList.remove('fa-play');
                        button.classList.add('fa-pause');
                    }
                } else {
                    console.log(`Song ${index + 1} URL not found for ${section}`);
                }
            }).catch(error => {
                console.error(`There was a problem fetching the song for ${section}:`, error);
            });
        });
    });
}

handlePlay('Malayalam');
handlePlay('English');
handlePlay('Hindi');
  
  
  