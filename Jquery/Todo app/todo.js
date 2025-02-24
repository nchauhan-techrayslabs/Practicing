$(document).ready(function () {
    
    loadTasks();
                                                      
    // Add task 
    $("#addtask").click(function () {   
        const task = $("#taskinput").val().trim();       

        if (task !== "") { 
            const taskItem = $("<li>")   
                .addClass("flex justify-between items-center p-2 bg-white border border-gray-200 rounded shadow-sm cursor-move")
                .text(task);

            const deleteBtn = $("<button>")
                .addClass("bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 delebtn")
                .text("Delete");

            taskItem.append(deleteBtn);
            $("#tasklist").append(taskItem);

            // Clear input field after adding task
            $("#taskinput").val("");

            // Save tasks to localStorage
            saveTasks();
        }
    });

    // Toggle completed task style on clicking a task
    $("#tasklist").on("click", "li", function () {
        $(this).toggleClass("line-through text-gray-500");

        // Save updated tasks
        saveTasks();
    });

    // Delete task when delete button is clicked
    $("#tasklist").on("click", ".delebtn", function (e) {
        e.stopPropagation(); 
        $(this).parent().remove();

        // Save updated tasks
        saveTasks();
    });

    // Make the task list sortable
    $("#tasklist").sortable({
        axis: "y",
        containment: "parent",
        cursor: "move",
        update: function () {
            saveTasks();
        }
    });

    // Save tasks to localStorage
    function saveTasks() {
        const tasks = [];
        $("#tasklist li").each(function () {
            const taskText = $(this).clone().children().remove().end().text().trim(); // Remove delete button text
            const completed = $(this).hasClass("line-through text-gray-500");
            tasks.push({ text: taskText, completed });
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (storedTasks) {
            storedTasks.forEach(task => {
                const taskItem = $("<li>")
                    .addClass("flex justify-between items-center p-2 bg-white border border-gray-200 rounded shadow-sm cursor-move")
                    .text(task.text);

                if (task.completed) {
                    taskItem.addClass("line-through text-gray-500");
                }

                const deleteBtn = $("<button>")
                    .addClass("bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 delebtn")
                    .text("Delete");

                taskItem.append(deleteBtn);
                $("#tasklist").append(taskItem);
            });
        }
    }
});
