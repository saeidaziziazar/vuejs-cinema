<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <movie-item v-for="movie in filteredMovies" class="movie" v-bind:key="movie.id" v-bind:movie="movie.movie"></movie-item>
        </div>
        <div v-else-if="movies.length">
            No Resualt
        </div>
        <div v-else>
            Loading . . .
        </div>
    </div>
</template>
<script>
    import MovieItem from './MovieItem.vue';

    export default {
        components: { MovieItem },
        props: [ 'genre', 'time', 'movies' ], 
        methods: {
            moviePassesGenreFilter(movie) {
                if (!this.genre.length) {
                    return true;
                } else {
                    let  movieGenres = movie.movie.Genre.split(", ");
                    let matched = true;
                    this.genre.forEach(genre => {
                        if (movieGenres.indexOf(genre) === -1) {
                            matched = false;
                        }
                    });
                    return matched;
                }
            }
        },
        computed: {
            filteredMovies() {
                return this.movies.filter(this.moviePassesGenreFilter);
            }
        },
        created() {
            console.log(this.$moment);
        }
    }
</script>
<style>

</style>