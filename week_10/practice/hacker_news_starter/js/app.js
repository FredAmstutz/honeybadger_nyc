function getNewsData() {

	const result = $.ajax({
		url: 'https://hacker-news.firebaseio.com/v0/topstories.json'
	});

	result.then(function(data) {
		console.log(data);
	});
}

function transformNewsData(data) {

}

function renderNewsData() {

}

getNewsData();