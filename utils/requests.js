const API_KEY = process.env.API_KEY


export default {
    featchTrending: {
        title: "Trending",
        url: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    },

    featchRated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en=US`,
    },

    featchActionMovies: {
        title: "Action",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=28`,
    },

    featchComedyMovies: {
        title: "Comedy",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=35`,
    },

    featchHorrorMovies: {
        title: "Horror",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=27`,
    },

    featchRomanceMovies: {
        title: "Romance",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=10749`,
    },

    featchMystery: {
        title: "Mystery",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=9648`,
    },

    featchSciFi: {
        title: "Sci-Fi",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=878`,
    },

    featchWestern: {
        title: "Western",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=37`,
    },

    featchAnimation: {
        title: "Animation",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=16`,
    },

    featchTv: {
        title: "Tv Movie",
        url: `/discover/movie/?api_key=${API_KEY}&with_genres=10770`,
    },
}