app.component('photo-view', {
    props: {
        tasks: {
            type: Array,
            require: true
        },
        'menu-id': Number,
        'show-images': Boolean
    },
    template:
        /*html*/
        `

    <div class="flex justify-center h-9/12">
      <div v-if="showImage">
        <button class="material-icons" @click="close()">highlight_off</button>
        <div class="pt-2 text-center text-lg inline-block" v-if="showImage">
          {{ tasks[currentIndex].article }}
        </div>
        <img :src="tasks[currentIndex].image">
      </div>
    </div>

  
    `,
    data() {
        return {
            showImage: false,
            currentIndex: 0,
        }
    },
    methods: {
        close() {
            this.$emit('close', this.showImage);
        },
    
    }
})