fetch("https://api.github.com/users/montyanderson/events")
.then(res => res.json())
.then(events => {

	const html = [].concat(...events
		.filter(event => event.type === "PushEvent")
		.map(event => event.payload.commits.map(commit => `
			<h5><a href="${event.repo.url}">${event.repo.name}</a></h5>
			<p>${commit.message}</p>
		`))
	).join("");

	document.querySelector(".commits").innerHTML = html;
});
