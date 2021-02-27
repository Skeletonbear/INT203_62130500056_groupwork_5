app.component('photo-view', {
    props: {
        'input-data' : Array,
        'task-id': Number,
        'show-images': Boolean,
        
    },
    emits:[
        'close'
    ],
    template:
        /*html*/
        `
    <div class="flex justify-center h-9/12">
      <div v-if="showImage">
        <button class="material-icons" @click="close()">highlight_off</button>
        <div class="pt-2 text-center text-lg inline-block" v-if="showImage">
          {{ input-data[task-id].article }}
        </div>
        <img :src="input-data[task-id].image">
      </div>
    </div>
  
    `,
    methods: {
        close() {
            this.$emit('close', this.showImage);
        },
    
    }
})