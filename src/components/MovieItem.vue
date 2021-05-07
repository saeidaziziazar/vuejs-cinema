<template>
    <div>
        <div class="movie-col-left">
            <img v-bind:src="movie.Poster">
        </div>
        <div class="movie-col-right">
            <div class="movie-title">
                <h2>{{ movie.Title }}</h2>
                <span class="movie-rating">{{ movie.Rated }}</span>
            </div>
            <div class="movie-sessions">
                <div v-for="session in sessions" v-bind:key="session.id" class="session-time-wrapper">
                    <div class="session-time">{{ formatsessionTime(session.time) }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['movie', 'sessions'],

        methods: {
            formatsessionTime(raw) {
                return this.$moment(raw).format('h:mm A');
            }
        }
    }
</script>
<style>

</style>