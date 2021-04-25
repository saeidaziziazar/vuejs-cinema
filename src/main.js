import './style.scss';
import Vue from 'vue';
import genres from './util/genres';

new Vue({
    el: '#app',
    components: {
        'movie-list': {
            template: `<div id="movie-list">
                            <div v-for="movie in movies" class="movie">{{ movie.title }}</div>
                        </div>`,
            data: function () {
                return {
                    movies: [
                        {title: 'Tenet'},
                        {title: '12 Strong'},
                        {title: 'Dark'}
                    ],
                }
            },
        },
        'movie-filter': {
            template: `<div id="movie-filter">
                            <h2>Movie Filter</h2>
                            <div class="filter-group">
                                <check-filter v-for="genre in genres" v-bind:title="genre"></check-filter>
                            </div>  
                        </div>`,
            components: {
                'check-filter': {
                    data() {
                        return {
                            checked: false,
                        }
                    },
                    props: ['title'],
                    template: `<div v-bind:class="{ 'check-filter': true, 'active': checked}" v-on:click="checked = !checked">
                                    <span class="checkbox"></span>
                                    <span class="check-filter-title">{{ title }}</span>
                                </div>`
                }
            },
            data() {
                return {
                    genres
                }
            }
        }
    }
})
