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
                inputSearch: '',
                notFound: false,
                showImage: false,
                currentIndex: 0,

            }

        },

        methods: {
            searchText(searchText) {
                this.inputSearch = searchText;
            },
            togglelike(index) {
                this.tasks[index].like = !this.tasks[index].like
            },

            toggleSearch() {
                this.search = !this.search;

            },
            close() {
                this.showImage = false;
            },
            imgClicked(index) {   
                this.currentIndex = index;        
            }

        },
        computed: {
            countUnlike() {
                return this.tasks.filter(t => !t.like).length
            },

            like() {
                return this.tasks.filter(t => t.like).length
            },

            inputData() {
                if (this.inputSearch == '') {
                    return this.tasks;
                } else {
                    NF = this.tasks.filter(p => p.article.includes(this.inputSearch.toLowerCase()));
                    if (NF == '') {
                        this.notFound = true;
                    } else {
                        return NF;
                    }

                }

            },
            

        }
    })