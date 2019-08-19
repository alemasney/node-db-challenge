const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/projects', async (req, res) => {
    try {
        const projects = await db('projects');

        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json(err);
    }
})

server.post('/api/projects', async (req, res) => {
    const body = req.body;

    try {
        const newProject = await db('projects').insert(body);

        // if(newProject.project_completed === 1) {
        //     newProject.project_completed = true;
        // } else {
        //     newProject.project_completed = false;
        // }
        // console.log(newProject.project_completed)
        
        if (newProject) {
            res.status(200).json(newProject);
        } else {
            res.status(404).json({message: 'could not add project'})
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

server.get('/api/resources', async (req, res) => {
    try {
        const resources = await db('resources');

        res.status(200).json(resources);
    } catch (err) {
        res.status(500).json(err);
    }
})

server.post('/api/resources', async (req, res) => {
    const body = req.body;

    try {
        const newResource = await db('resources').insert(body);

        if (body) {
            res.status(200).json(newResource);
        } else {
            res.status(404).json({ message: 'could not add resource' })
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

server.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await db('tasks');

        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
})


server.post('/api/tasks', async (req, res) => {
    const body = req.body;

    try {
        const newTask = await db('tasks').insert(body);

        if (body) {
            res.status(200).json(newTask);
        } else {
            res.status(404).json({ message: 'could not add new task' })
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = server;