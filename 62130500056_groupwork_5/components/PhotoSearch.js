app.component('photo-search', {
    props: {},
    template:
        /*html*/
        `
    <p>Typing... {{ input }}</p>  
    
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
            input: '',
            notFound: false,
            showImage: false,
            currentIndex: 0,
        }
    },
    computed: {
        inputSearch() {
            if (this.inputSearch == '') {
                return this.tasks;
            } else {
                NF = this.tasks.filter(p => p.article.includes(this.input.toLowerCase()));
                if (NF == '') {
                    this.notFound = true;
                } else {
                    return NF;
                }

            }

        },
        addNewTask() {
            let task = this.newTask
            this.$emit('add-new-task', task)
            this.newTask = ''
        }
    }
})