
// fetch api wiht node

async function FetchData() {
    try {
      // fecth todo 1 from api , take a loft time
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  
      // transform to get a json res, take a loft time
      const data = await res.json();
  
      return data;
    } catch (e) {
      console.error(e);
    }
  }
  
  // wrong method to call a async function
  console.log(FetchData()); // Promise { <unknown> }
  
  // best methode to call a async funtion
  
  //1-methode pas besoin de creer une fontion async-await
  
  FetchData()
    .then((data) => console.log(data)) //  { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
    .catch((e) => console.error(e));
  
  //2-methode
  
  (async () => {
    try {
      const data = await FetchData();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  })();
  