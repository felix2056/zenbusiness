( function() {
	const expandButtons = document.querySelectorAll(".expand-toggle-3");

	expandButtons.forEach(expandButton => {
		expandButton.addEventListener("click", async (event) => {

			event.preventDefault();
			let block = expandButton.closest('.zb-list-states-expandable-v4');

			if (block.classList.contains("open")) {
				expandButton.querySelector(
					".toggle-text"
				).innerText = `${expandButton.getAttribute("data-expand-text")}`;
				block.classList.remove("open");
				expandButton.setAttribute("aria-expanded", "false");
				expandButton.setAttribute(
					"aria-label",
					expandButton.getAttribute("data-expand-text")
				);
				window.scrollTo({
					top: block.offsetTop,
					left: 0,
					behavior: "smooth",
				});
			} else {
				expandButton.querySelector(
					".toggle-text"
				).innerText = `${expandButton.getAttribute("data-collapse-text")}`;
				block.classList.add("open");
				expandButton.setAttribute("aria-expanded", "true");
				expandButton.setAttribute(
					"aria-label",
					expandButton.getAttribute("data-collapse-text")
				);
			}
		});
	});
})();
