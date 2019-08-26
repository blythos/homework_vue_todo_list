import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			toDos: [{item: "Remember the milk", done: false, priority: "low"},
   		{item: "Learn Vue", done: true, priority: "high"}],
			newToDo: "",
			newToDoPriority: ""
		},
		methods: {
			saveNewToDo: function() {
				if (this.newToDo !== "") {
					const toDoToAdd = {item: this.newToDo, done: false, priority: this.newToDoPriority};
					this.toDos.push(toDoToAdd);
					this.newToDo = "";
				}
			},
			isDone: function(index) {
				this.toDos[index].done = true;
			}
		}
	});
});
