import { useState, useEffect } from 'react';
import { firebase } from '../firebase';
import moment from 'moment';
import { collatedTasksExist } from '../helpers';


export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        let unsubscribe = firebase
        .firebase()
        .collection('tasks')
        .where('userId', '==', '1sUS7WPiimw5nvArtGRf');

        unsubscribe = selectedProject && !collatedTasksExist(selectedProject) ? 
        (unsubscribe = unsubscribe.where('projectId', '==', selectedProject))
        : selectedProject === 'Today'
        ? (unsubscribe = unsubscribe.where(
            'date', 
            '==', 
            moment().format('DD/MM/YYYY')
            ))
        : selectedProject === 'INBOX' || selectedProject === 0
        ? (unsubscribe.unsubscribe.where('date', '==', ''))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot(snapshot => {
        const newTasks = snapshot.docs.map(task => ({
            id: task.id,
            ...task.data(),
        }));

        setTasks(
            selectedProject === 'NEXT_WEEK'
            ? newTasks.filter(
                task => 
                    moment(task.date, 'DD-MM-YYYY').diff(momment(), 'days') <= 7 && 
                    task.archived !== true
                )
            : newTasks.filter(task => task.archived !== true)
        );

        setArchivedTasks(newTasks.filter(task => task.archived !== false));
    });

    return () => unsubscribe();
    }, [selectedProject]);

return { tasks, archivedTasks };
};

export const useProject = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
        .firestore()
        .collection('projects')
        .where('userId', '1sUS7WPiimw5nvArtGRf')
        .orderBy('projectId')
        .get()
        .then(snapshot => {
            const allProjects = snapshot.docs(project => ({
                ...project.data(),
                docId: project.id,
            }));

            if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                setProjects(allProjects);
            }
        });
    },[projects])
    
    return { projects, setProjects }; 
};