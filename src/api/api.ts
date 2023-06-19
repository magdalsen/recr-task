const token = import.meta.env.VITE_TOKEN

export const fetchReviews = (id: number) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      
      return fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => response.results)
        .catch(err => `Sorry, error occured: ${err}`);
}

export const fetchCollectionDetails = (collId: string | undefined) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      
      return fetch(`https://api.themoviedb.org/3/collection/${collId}?language=en-US`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => `Sorry, error occured: ${err}`);
}

export const fetchCollections = (id: number) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`
        }
      };
      
      return fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => `Sorry, error occured: ${err}`);
}

export const fetchData = (page: number) => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    };
    
    return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
      .then(response => response.json())
      .then(response => response.results)
      .catch(err => `Sorry, error occured: ${err}`);
};