app.component('photo-search', {
    props: {},
    template:
        /*html*/
        `
    <p>Typing... {{ input }}</p>  
    <button class="material-icons" v-if="search==false" v-on:click="toggleSearch">search</button>
    <div class="flex" v-show="search">
      <input type="text" class="flex-1 border-2 border-blue-2" v-model="input" @keyup.enter="inputSearch"
        placeholder="Please enter text for searching photos...">
      <button class="bg-blue-400 text-white py-1 px-6 rounded" v-on:click="toggleSearch">Cancel</button>
    </div>
    <p v-if="notFound">NOT FOUND... </p>

    `,
    data() {
        return {
            input: '',
            search: false,
        }
    },
    methods: {
        toggleSearch() {
            this.search = !this.search;
            if (this.search == false) {
                this.inputSearch = '';
            }
            this.$emit('toggle-search');
        },
    }
})