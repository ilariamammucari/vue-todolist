var app = new Vue({
    el: '#root',
    data: {
        coseDaFare: [
            {
                text: 'Fare la spesa',
                editing: true
            },
            {
                text: 'Cena fuori',
                editing: true
            },
            {
                text: 'Studiare',
                editing: true
            }
        ],
        datiInput: {},
        coseCestinate: [],
        valoreInput: '',
        rosso: 'rosso',
        attivo: 'active',
        datiCestino: {}
    },
    created(){
        console.log(this.coseDaFare);
    },
    methods: {
        cancellaDaFare(index){
            this.coseCestinate.push(this.coseDaFare[index].text);
            this.coseDaFare.splice(index,1);

        },
        modificaDaFare(index){
            this.coseDaFare[index].editing = false;
        },
        cancellaDefinitivamente(index){
            this.coseCestinate.splice(index,1);
        },
        ripristina(index){
            this.datiCestino.text = this.coseCestinate[index];

            this.coseDaFare.push(this.datiCestino);
            this.coseCestinate.splice(index,1);
        },
        inserimentoDaInput(){
            if( this.valoreInput.length > 3 ){

                this.datiInput.text = this.valoreInput.charAt(0).toUpperCase() + this.valoreInput.substr(1).toLowerCase();
                this.datiInput.editing = true;
                this.coseDaFare.push(this.datiInput);
                console.log(this.coseDaFare);
                this.valoreInput = '';

            }
        },
        cestinaTutti(){
            this.coseCestinate.splice(0);
        },
        fineModifica(index){
            this.coseDaFare[index].editing = true;
        }
    }
});
