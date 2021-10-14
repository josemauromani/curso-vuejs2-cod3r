new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    watch: {
        resultado(value) {
            setTimeout(() => {
                this.valor = 0;
            }, 5000)
        }
    },
    computed: {
        resultado() {
            if (this.valor === 0)
                return 'Zeradoooo';
            return (this.valor === 37) ? 'Valor igual a 37' : 'Valor diferente que 37';
        }
    }
});