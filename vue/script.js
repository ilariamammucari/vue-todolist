var app = new Vue({
    el: '#root',
    data: {
        coseDaFare: [
            'Fare la spesa',
            'Studiare',
            'Cena fuori alle 21:00'
        ],
        coseCestinate: [],
        modifica: ''
    },
    methods: {
        cancellaDaFare(index){
            this.coseCestinate.push(this.coseDaFare[index]);
            this.coseDaFare.splice(index,1);
        },
        modificaDaFare(index){
            this.modifica = prompt('Modifica cosa da fare');
            this.modifica = this.modifica.charAt(0).toUpperCase() + this.modifica.substr(1).toLowerCase();
            this.coseDaFare.splice(index,1,this.modifica);
        },
        cancellaDefinitivamente(index){
            this.coseCestinate.splice(index,1);
        },
        ripristina(index){
            this.coseDaFare.push(this.coseCestinate[index]);
            this.coseCestinate.splice(index,1);
        }
    }
});