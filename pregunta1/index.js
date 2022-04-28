function foo( d, m, y){
	try{
		
		if( typeof(d) == String && (d>0 && m>0 && y>0 ) && (d>31 && m<12 )){
			date_now = new Date();
			year = date_now.getFullYear() - y;
			month = date_now.getMonth()- m;
			return "Tue edad es: "+year+" años con " +month+" meses."
		}else[
			console.log('Datos erroneos')
		]
	}catch(e){
		console.log('Datos erroneos')
		console.error('error :( ', e.message);
	}
	
}