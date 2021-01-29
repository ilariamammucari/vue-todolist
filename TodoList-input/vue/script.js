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
        datiInput: {},
        coseCestinate: [],
        valoreInput: '',
        rosso: 'rosso',
        input: '',
        attivo: 'active'
    },
    methods: {
        cancellaDaFare(index){
            this.coseCestinate.push(this.coseDaFare[index].text);
            this.coseDaFare.splice(index,1);
        },
        modificaDaFare(index){
            this.coseDaFare[index].editing = true;
            this.input = this.coseDaFare[index];
        },
        cancellaDefinitivamente(index){
            this.coseCestinate.splice(index,1);
        },
        ripristina(index){
            this.coseDaFare.push(this.coseCestinate[index]);
            this.coseCestinate.splice(index,1);
        },
        inserimentoDaInput(index){
            if( this.valoreInput.length > 3 ){

                this.datiInput.text = this.valoreInput.charAt(0).toUpperCase() + this.valoreInput.substr(1).toLowerCase();
                this.datiInput.editing = false;
                this.coseDaFare.push(this.datiInput);
                console.log(this.coseDaFare);
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
