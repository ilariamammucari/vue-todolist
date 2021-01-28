var app = new Vue({
    el: '#root',
    data: {
        coseDaFare: [
            {
                text: 'Fare la spesa',
                editing: false
            },
            {
                text: 'Cena fuori',
                editing: false
            },
            {
                text: 'Studiare',
                editing: false
            }
        ],
        coseCestinate: [],
        valoreInput: '',
        rosso: 'rosso'
    },
    methods: {
        cancellaDaFare(index){
            this.coseCestinate.push(this.coseDaFare[index]);
            this.coseDaFare.splice(index,1);
        },
        modificaDaFare(index){
            this.coseDaFare[index].editing = true;
            // this.modifica = this.modifica.charAt(0).toUpperCase() + this.modifica.substr(1).toLowerCase();
            // this.coseDaFare.splice(index,1,this.modifica);
        },
        cancellaDefinitivamente(index){
            this.coseCestinate.splice(index,1);
        },
        ripristina(index){
            this.coseDaFare.push(this.coseCestinate[index]);
            this.coseCestinate.splice(index,1);
        },
        inserimentoDaInput(){
            if( this.valoreInput.length > 3 ){
                this.coseDaFare.push(this.valoreInput.charAt(0).toUpperCase() + this.valoreInput.substr(1).toLowerCase());
                this.valoreInput = '';
            }
        },
        cestinaTutti(){
            this.coseCestinate.splice(0);
        }
    }
});