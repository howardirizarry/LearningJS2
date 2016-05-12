var balance = 160354.2165;
	var interest = 0.041;
	var mort30 = 30;
	var mort15 = 15;
	document.write('Balance: ', balance.toFixed(2), '<br/>');
	document.write('Type of Mortgage: ', mort30 + ' year fixed', '<br/>');
	document.write('Interest Rate: ', (interest * 100).toFixed(1)  +'%', '<br/>');
	
	document.write('Your monthly payment: ',((balance/mort30)/12).toFixed(2), '<br/>');
	document.write('Your monthly payment w/ interest: ', ((( (balance * interest)+(balance) )/mort30)/12).toFixed(2), '<br/>');
	document.write('Total Interest Owed: ', (balance * interest).toFixed(1), '<br/>');