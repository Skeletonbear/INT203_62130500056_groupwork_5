    const app = Vue.createApp({
        data() {
            return {
                tasks: [{
                        id: 0,
                        image: './images/food1.jpg',
                        article: 'Steamed crab',
                        like: false
                    },
                    {
                        id: 1,
                        image: './images/food2.jpg',
                        article: 'Steamed shrimp',
                        like: false
                    },
                    {
                        id: 2,
                        image: './images/food3.jpg',
                        article: 'Oyster',
                        like: false
                    }
                ],
                search: false,
                input: '',
                notFound: false,
                showImage: false,
                currentIndex: 0,

            }

        },

        methods: {
            togglelike(index) {
                this.tasks[index].like = !this.tasks[index].like
            },

            toggleSearch() {
                this.search = !this.search;

            },
            close() {
                this.showImage = false;
            },
            imgClicked() {
                this.showImage = true;           
            }

        },
        computed: {
            countUnlike() {
                return this.tasks.filter(t => !t.like).length
            },

            like() {
                return this.tasks.filter(t => t.like).length
            },

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
            

        }
    })