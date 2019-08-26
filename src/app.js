import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: "#app",
		data: {
			toDos: [{item: "Remember the milk", done: false},
   		{item: "Learn Vue", done: true}],
			newToDo: ""
		},
		methods: {
			saveNewToDo: function() {
				if (this.newToDo !== "") {
					const toDoToAdd = {item: this.newToDo, done: false};
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
