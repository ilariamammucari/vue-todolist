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
        rosso: 'rosso',
        input: ''
    },
    methods: {
        cancellaDaFare(index){
            this.coseCestinate.push(this.coseDaFare[index].text);
            this.coseDaFare.splice(index,1);
        },
        modificaDaFare(index){
            this.coseDaFare[index].editing = true;
            this.input = this.coseDaFare[index].text;
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
                this.coseDaFare.text.push(this.valoreInput.charAt(0).toUpperCase() + this.valoreInput.substr(1).toLowerCase());
                this.valoreInput = '';
            }
        },
        cestinaTutti(){
            this.coseCestinate.splice(0);
        },
        fineModifica(index){
            this.coseDaFare[index].editing = false;
        }
    }
});