import React from 'react';

function App() {
  const [cacheData, setCacheData] = React.useState();

  // Function to get all cache data
  const getAllCacheData = async () => {
    var url = 'https://localhost:3000';

    // List of all caches present in browser
    var names = await caches.keys();

    var cacheDataArray = [];

    // Iterating over the list of caches
    names.forEach(async (name) => {

      // Opening that particular cache
      const cacheStorage = await caches.open(name);

      // Fetching that particular cache data
      const cachedResponse = await cacheStorage.match(url);
      var data = await cachedResponse.json();

      // Pushing fetched data into our cacheDataArray
      cacheDataArray.push(data);
      setCacheData(cacheDataArray.join(', '));
    })
  };

  const addDataIntoCache = (cacheName, url, response) => {
    // Converting our response into Actual Response form
    const data = new Response(JSON.stringify(response));

    if ('caches' in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        alert('Data Added into cache!')
      });
    }
  };

  return (
    <>
      <div style={{ height: 500, width: '80%' }}>
        <h4>How to get all cache data in ReactJS?</h4>
        <button onClick={() => getAllCacheData()} >
          Get All Cache Data</button>  <br />
        <h6>All Cache Data is: {cacheData}</h6>
      </div>

      <div style={{ height: 500, width: '80%' }}>
        <h4>How to store data into cache in ReactJS?</h4>
        <button onClick={() => addDataIntoCache('MyCache',
          'https://localhost:300', 'SampleData')} >
          Add Data Into Cache</button>
      </div>
    </>
  );
}

export default App;
