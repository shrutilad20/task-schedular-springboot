package com.shruti.taskmanager.controller;

import com.shruti.taskmanager.entity.Task;
import com.shruti.taskmanager.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tasks")
@CrossOrigin("*")

public class TaskController {

    private final TaskService taskService;

    public TaskController(TaskService taskService){
        this.taskService = taskService;
    }

    @PostMapping
    public Task addTask(@RequestBody Task task){
        return taskService.addTask(task);
    }

    @GetMapping
    public List<Task> getTasks(){
        return taskService.getAllTasks();
    }

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable Long id){
        taskService.deleteTask(id);
    }

    @PutMapping
    public Task updateTask(@RequestBody Task task){
        return taskService.updateTask(task);
    }
    @PutMapping("/{id}")
public Task completeTask(@PathVariable Long id){

    Task task = taskRepository.findById(id).orElse(null);

    task.setCompleted(true);

    return taskRepository.save(task);
}
}