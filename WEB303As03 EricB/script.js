// assignment 3
// Eric Batiste 

function getJSON() {
	$.getJSON("team.json", function(data) {
		console.log(data); 
		data.teammembers.forEach(teamMember => {
			let h3 = document.createElement("h3")
			h3.innerHTML = teamMember.name
			$("#team").append(h3)
			let h4 = document.createElement("h4")
			h4.innerHTML = teamMember.title
			$("#team").append(h4)
			let p = document.createElement("p")
			p.innerHTML = teamMember.bio
			$("#team").append(p)
		})
	})	
}

function loadData() {
	let loading = document.createElement("p")
	loading.innerHTML = "Loading..."
	$("#team").append(loading)
	setTimeout(() => {
		$.ajax({method: "GET", url:"team.json"})
		.done(function (data) {
			$("#team p").remove()
			console.log(data);
			data.teammembers.forEach(teamMember => {
				let h3 = document.createElement("h3")
				h3.innerHTML = teamMember.name
				$("#team").append(h3)
				let h4 = document.createElement("h4")
				h4.innerHTML = teamMember.title
				$("#team").append(h4)
				let p = document.createElement("p")
				p.innerHTML = teamMember.bio
				$("#team").append(p)
			})
		})
	}, 5000)
}