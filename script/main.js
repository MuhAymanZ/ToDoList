const editButton = document.querySelectorAll(".edit-button");
const editModal = document.querySelector(".edit-modal");
const removeButton = document.querySelectorAll(".remove-button");
const removeModal = document.querySelector(".remove-modal");

var addRule = (function (style) {
	var sheet = document.head.appendChild(style).sheet;
	return function (selector, css) {
		var propText =
			typeof css === "string"
				? css
				: Object.keys(css)
						.map(function (p) {
							return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
						})
						.join(";");
		sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
	};
})(document.createElement("style"));

function openModal(button) {
	button.forEach((btn) => {
		btn.addEventListener("click", () => {
			btn.nextElementSibling.showModal();
		});
	});
}
openModal(editButton);
openModal(removeButton);

const taskCheckBox = document.querySelectorAll(
	".task-action input[type='checkbox']"
);
const checkedAudio = new Audio("media/sounds/Check.mp3");

taskCheckBox.forEach((check, index) => {
	index++;
	check.addEventListener("change", (event) => {
		const taskData =
			event.target.parentElement.parentElement.previousElementSibling;
		const taskNameDiv = taskData.children[0];
		const taskName = taskNameDiv.children[0].textContent;
		const taskNameLineWidth = window
			.getComputedStyle(taskNameDiv)
			.getPropertyValue("width");
		const taskTimeDiv = taskData.children[1];
		const taskStatusDiv = taskData.children[2];

		if (check.checked) {
			checkedAudio.play();

			console.log(taskNameLineWidth);
			console.log(index);
			addRule(`.task-box #task${index}::before`, {
				width: taskNameLineWidth,
			});
			taskStatusDiv.textContent = "Done";
			taskStatusDiv.classList.add("done");
			taskStatusDiv.classList.remove("in-prog");
		} else {
			addRule(`.task-box #task${index}::before`, {
				width: "0",
			});
			taskStatusDiv.textContent = "In-Progress";
			taskStatusDiv.classList.add("in-prog");
			taskStatusDiv.classList.remove("done");
		}
	});
});
