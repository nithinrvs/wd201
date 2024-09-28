const todoList = () => {
    let all = []
  
    const add = (todoItem) => {
        all.push(todoItem)
    }
  
    const markAsComplete = (index) => {
        all[index].completed = true
    }
  
    const overdue = () => {
        const ans_overdue = []
        for(let i=0; i<all.length; i++){
            if(all[i].dueDate < today){
                ans_overdue.push(all[i]); // Push the todo item, not the index
            }
        }
        return ans_overdue;
    }
  
    const dueToday = () => {
        const ans_duetoday = []
        for(let i=0; i<all.length; i++){
            if(all[i].dueDate === today){
                ans_duetoday.push(all[i]); // Push the todo item
            }
        }
        return ans_duetoday;
    }
  
    const dueLater = () => {
        const ans_duelater = []
        for(let i=0; i<all.length; i++){
            if(all[i].dueDate > today){
                ans_duelater.push(all[i]); // Push the todo item
            }
        }
        return ans_duelater;
    }
  
    const toDisplayableList = (list) => {
        let output = "";
        for(let i=0; i<list.length; i++){
            let checkbox = list[i].completed ? "[x]" : "[ ]";
            let displayDate = list[i].dueDate === today ? "" : list[i].dueDate;
            output += `${checkbox} ${list[i].title} ${displayDate}\n`;
        }
        return output.trim();
    }
  
    return {
        all,
        add,
        markAsComplete,
        overdue,
        dueToday,
        dueLater,
        toDisplayableList
    };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
    return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
    new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")