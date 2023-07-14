const editButton = document.querySelectorAll(".edit-button");
const editModal = document.querySelector(".edit-modal");
const removeButton = document.querySelectorAll(".remove-button");
const removeModal = document.querySelector(".remove-modal");

editButton.forEach((editButton) => {
	editButton.addEventListener("click", (e) => {
		editButton.nextElementSibling.showModal();
	});
});
removeButton.forEach((removeButton) => {
	removeButton.addEventListener("click", () => {
		removeButton.nextElementSibling.showModal();
	});
});
