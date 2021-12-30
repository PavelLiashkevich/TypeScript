// Guards - некоторые вспомогательные конструкции в TS, которые позволяют работать с типами

function strip(x: string | number) {
	if (typeof x === 'number') {
		return x.toFixed(2);
	}
	return x.trim();
}

// Принадлежность какого-либо объекта к классу

class MyResponse {
	header = 'response header';
	result = 'response result';
}

class MyError {
	header = 'error header';
	message = 'error message';
}

// Функция, которая обрабатывает, и Response, и Error
function handle(res: MyResponse | MyError) {
	if (res instanceof MyResponse) {
		return {
			info: res.header + res.result,
		};
	} else {
		return {
			info: res.header + res.message,
		};
	}
}
