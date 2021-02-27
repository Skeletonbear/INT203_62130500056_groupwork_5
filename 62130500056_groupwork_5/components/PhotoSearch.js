app.component('photo-search', {
    props: {
        tasks: {
            type: Array,
            require: true
        }
    },
    emits:[
        'toggle-Search',
        'search-text'
    ],
    template:
        /*html*/
        `
    <p>Typing... {{ inputSearch }}</p>  
    <button class="material-icons" v-if="search==false" v-on:click="toggleSearch">search</button>

    <div class="flex" v-show="search">
      <input type="text" class="flex-1 border-2 border-blue-2" 
      v-model="inputSearch" @input="searchText"  
      placeholder="Please enter text for searching photos...">
      
      <button class="bg-blue-400 text-white py-1 px-6 rounded" v-on:click="toggleSearch">Cancel</button>
    </div>
    
    `,
    data() {
        return {
            inputSearch: '',
            search: false,
        }
    },
    methods: {
        toggleSearch() {
            this.search = !this.search;
            if (this.search == false) {
                this.inputSearch = '';
            }
            this.$emit('toggle-Search');
        },
        searchText() {
            this.$emit('search-text', this.inputSearch);
        },
    }
})