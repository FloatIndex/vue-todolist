const app = new Vue (
    {
        el: '#app',
        data: {
            newTodo: '',
            todos: [
                {
                    text: 'mangiare',
                    done: false
                },
                {
                    text: 'studiare',
                    done: false
                },
                {
                    text: 'programmare',
                    done: false
                },
                {
                    text: 'programmare ancora',
                    done: false
                },
                {
                    text: "recitare un ave maria",
                    done: false
                }
            ]
        },
        mounted() {
            this.$nextTick(() => this.$refs.input.focus());
        },
        methods: {
            addTodo(newTodo) {
                if(newTodo.trim().length > 0) {
                    const todo = {
                        text: newTodo.trim(),
                        done: false
                    }
                    this.todos.push(todo);
                    this.newTodo = '';
                }
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            doneTodo(index) {
                this.todos[index].done = !this.todos[index].done;
            },
            /*
            
            */
        }
    }
);