
const $progressBar = $(".progress-bar");
let progressValue = 0;

function renderProgress(){
	$progressBar.html(progressValue + "%");
}

$(".j-btn-1").click(() => {
	progressValue = progressValue + 1;
	$progressBar.css("width", progressValue+"%");
	renderProgress();
	console.log(progressValue);
});

$(".j-btn-3").click(function(){ 
	progressValue = progressValue + 3;
	$progressBar.css("width", progressValue+"%");
	renderProgress();

	console.log(progressValue);
});

$(".j-btn-7").click(function(){ 
	progressValue = progressValue + 7;
	$progressBar.css("width", progressValue+"%");
	renderProgress();

	console.log(progressValue);
});