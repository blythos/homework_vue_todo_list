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
					const itemToAdd = {name: this.newToDo, done: false};
					this.toDos.push(itemToAdd);
					this.newToDo = "";
				}
			},
			buyItem: function(index) {
				this.items[index].purchased = true;
			}
		}
	});
});
