const compress = (a, b = true) => {
	//TODO: implementați funcția
	// TODO: implement the function

	if (typeof a !== 'string' && !(a instanceof String)) {
		throw new Error('InvalidType');
	}

	if(a.length===0){
		return '';
	}

	let compressed=a[0];
	let count=1;

	for( var i=1;i<a.length;i++)
	{
		if(a[i]===a[i-1])
			count++;
		else{

			if(b){
				compressed+=count;
			}
			compressed+=a[i];
			count=1;
		}
	}

	if(b){
		compressed += count;
		return compressed;}

	else{
		
		let decompressed="";
		let i=0;
		while(i<a.length){
			let str=a[i];
			i++;
			let count="";
			while(i<a.length &&!isNaN(Number(a[i]))){
				count+=a[i];
				i++;
			}
			for (let j = 0; j < count; j++) {
				decompressed += str;
			  }
		}
		
		return decompressed;
	  }
}

module.exports = compress