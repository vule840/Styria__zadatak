console.log('sdfsdf')



var vm  = new Vue({

	el:'#vue-app',
	
	data:{
		players: [],
		lasts: [],
		count:'',
		korisnik: '',
		bodovi: ''
	
	},
	created(){
		 this.$http.get('players.json').then(function(data){
		 	console.log(data.body.players)
		 	this.lasts = data.body.players.reverse().slice(-1)[0];
		 	this.players = data.body.players.slice(0,7);
		 	//https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array/3216041
		 	// console.log(lasts)
		 })

		// this.$http.get('players.json').then(response =>{
		// 	this.players = response.body;
		// 	console.log(players)
		// })
	 }
	// methods:{
	//  	sortaj: function (event) {
	//  			// this.players = data.body.players.sort()
	//  			console.log(event)
	//  			console.log(event.target.innerText)
	//  			this.count = event.target.innerText;
	//  	},
	//  	testiraj: function(event){
	//  		event.preventDefault()
	//  		console.log(event.srcElement.innerText)
	//  		this.korisnik = event.target.innerText;
	//  		 if (event.target.classList === "col tablica__score") {

	//  			console.log('tablica__score')
	//  		 } else if(event.target.classList === "col tablica__name"){
	//  		 	console.log('tablica__name')	

	//  		 }
	//  	}
	//  }

	
})
