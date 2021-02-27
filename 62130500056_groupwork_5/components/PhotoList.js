app.component('photo-list', {
    props: {
        tasks: {
            type: Array,
            require: true
        },
        'not-found': Boolean,
        'input-data': Array
    },
    template:
        /*html*/
        `
    <div v-for="task in inputData" class="flex ">
        <img :src="task.image" v-on:click="togglelike(task.id)" class="h-24 w-34 resize" @dblclick="imgClicked(task.id)" />
        <h1 class=" mx-5 my-10 space-y-3 " > {{ task.article }} </h1>
        <i class="material-icons text-red-400 mx-5 my-10 space-y-3 " v-show="task.like">favorite</i>
       
    </div>

  
    `,
    methods: {
        togglelike(index) {
            this.$emit('toggle-like', index)
        },
        imgClicked(id) {
            this.currentIndex = id;
            this.showImage = true;
            this.$emit('img-clicked', this.currentIndex);
            this.$emit('show-images', this.showImage)

        },

    }

})

app.component('photo-list2', {
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

    `,
    computed: {
        countUnlike() {
            return this.tasks.filter(t => !t.like).length
        },

        like() {
            return this.tasks.filter(t => t.like).length
        },
    }
})