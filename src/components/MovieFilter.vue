<template>
    <div id="movie-filter">
        <h2>Movie Filter</h2>
        <h3>Filter by time of day</h3>
        <div class="filter-group">
            <check-filter v-for="time in times" v-bind:title="time" category="time" v-on:check-filter="checkFilter" v-bind:key="time.id"></check-filter>
        </div>   
        <h3>Filter by genre</h3>
        <div class="filter-group">
            <check-filter v-for="genre in genres" v-bind:title="genre" category="genre" v-on:check-filter="checkFilter" v-bind:key="genre.id"></check-filter>
        </div>
    </div>
</template>
<script>
    import checkFilter from './CheckFilter.vue';
    import genres from '../util/genres';
    import times from '../util/times';

    export default {
            components: {
                checkFilter, 
            },
            data() {
                return {
                    genres, times
                }
            },

            methods: {
                checkFilter(category, title, checked) {
                    this.$emit('check-filter', category, title, checked);
                }
            }
        }
</script>
<style>

</style>