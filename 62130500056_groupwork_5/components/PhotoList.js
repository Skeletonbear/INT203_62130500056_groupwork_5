app.component('photo-list', {
    props: {
        tasks: {
            type: Array,
            require: true
        }
    },
    template:
        /*html*/
        `
    <div class="font-mono">Photo Gallery ( {{countUnlike}}) </div>
    <div>:: Like ( {{like}} )</div>
    <button class="material-icons" v-if="search==false" v-on:click="toggleSearch">search</button>
          

    <div v-for="(task,index) in tasks" class="flex ">
    <img :src="task.image" v-on:click="togglelike(index)" class="h-24 w-34 resize" @dblclick="imgClicked(task.id)" />
    <h1 class=" mx-5 my-10 space-y-3 " > {{ task.article }} </h1>
    <i class="material-icons text-red-400 mx-5 my-10 space-y-3 " v-show="task.like">favorite</i>
    </div>
    </div>
  
    `,
    methods: {
        togglelike(index) {
            this.$emit('toggle-like', index)
        },
        imgClicked() {
            this.$emit('img-Clicked', index)
        }

    },
    computed: {
        countUnlike() {
            return this.tasks.filter(t => !t.like).length
        },

        like() {
            return this.tasks.filter(t => t.like).length
        },

    }
})