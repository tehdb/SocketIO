var io = require('socket.io').listen(8888);


var db = { 
	data : [],
	add : function( val1, val2 ) {
		var i=0,
			l=this.data.length,
			val;


		for( i; i < l; i++ ) {
			val = this.data[i];
			if( val.rand1 === val1 && val.rand2 === val2 ) {
				return true;
			}
		}	

		this.data.push({
			rand1 : val1,
			rand2 : val2
		});
		
		console.log( this.data );

		return false;
		// for( i; i < l; i++ ) {
		// 	val = this.data[i];

		// 	if( val.rand1 === val1 && val.rand2 === val2 ) {
		// 		return true;
		// 	} else {
		// 		this.data.push({
		// 			rand1 : val1,
		// 			rand2 : val2
		// 		});
		// 		console.log( this.data );
		// 		return false;
		// 	}
		// }
	}
}

io.sockets.on('connection', function (socket) {


	socket.emit('CalcRandom', {
		f1: 1,
		t1: 9,
		f2: 1,
		t2: 9
	});

	socket.on('ReadyEvent', function(data) {
		console.log(data);
	});

	socket.on('CheckEvent', function(data) {
		var res = db.add( data.rand1, data.rand2 );
		console.log( "data added?: " + res );
		socket.emit('ResultEvent', res );
	});

	socket.on('GetDbEvent', function(data){
		socket.emit('ListDbEvent', db.data );
	});

});