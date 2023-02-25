let id = 0;

Vue.createApp({
    data() {
        return {
            dadcontent: '',
            arr: [
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' },
                { id: id++, text: '是我啦，我是你爸' }

            ]
        }
    },
    methods: {
        add() {
            this.arr.push({ id: id++, text: this.dadcontent })
            this.dadcontent = ''
        },
        remove(dad) {
            this.arr = this.arr.filter((t) => t !== dad)
        }
    }
}).mount("#app")