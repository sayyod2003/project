new Vue({
    el:'#app',
    data(){
        return{
            title: 'Mamlakatlar ro`yxati',
            countries: [],
            country :{},
            show_country:false
        }
    },
    methods:{
        fetchCountries: function(){
            let url = 'https://restcountries.com/v3.1/all';
            axios.get(url).then(res=>{
                this.countries = res.data
                console.log(this.countries);
            })  
        },
        showCountry: function(altspellings){
            let allCountries = this.countries;
            let country = allCountries.filter(country => country.altSpellings === altspellings);
            this.country = country;
            this.show_country = true;
            
            console.log(country);
        },
        showCountries: function(){
            this.show_country = false;
        }

    },
    mounted(){
        this.fetchCountries()
    }
})