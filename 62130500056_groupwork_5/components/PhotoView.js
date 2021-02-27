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
      <div v-if="showImages">
        <button class="material-icons" @click="close">highlight_off</button>
        <div class="pt-2 text-center text-lg inline-block" v-if="showImages">
          {{ inputData[taskId].article }}
        </div>
        <img :src="inputData[taskId].image">
      </div>
    </div>
  
    `,
    methods: {
        close() {
            this.$emit('close', this.showImages);
        },
    
    }
})