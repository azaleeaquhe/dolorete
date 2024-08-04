let task = {
    id: 1,
    description: "Finish writing report",
    complete: false,
    priority: "high",
    dueDate: "2024-06-30"
};

// Accessing object properties
console.log(task.complete); // false

// Changing the 'complete' property
task.complete = true;
console.log(task.complete); // true
