<template>
    <div id="movie-filter">
        <h2>Movie Filter</h2>
        <div class="filter-group">
            <check-filter v-for="genre in genres" v-bind:title="genre" v-on:check-filter="checkFilter" v-bind:key="genre.id"></check-filter>
        </div>  
    </div>
</template>
<script>
    import checkFilter from './CheckFilter.vue';
    import genres from '../util/genres';

    export default {
            components: {
                checkFilter, 
            },
            data() {
                return {
                    genres
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