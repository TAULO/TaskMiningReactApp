import React from 'react';
import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import TaskListComponent from '../../components/TaskListComponent';

configure({ adapter: new Adapter() });


describe('TaskListComponent', () => {
            let wrapper;
            const tasksList = [{
                name: 'Task 1',
                tasksCount: '5',
                taskCompletionTimeSeconds: '300',
                timeSpentPrApplication: {
                    'Application 1': '120',
                    'Application 2': '180'
                },
                individualTaskUserCount: {
                    'User 1': '3',
                    'User 2': '2'
                },
                individualTaskUserInteractionsCount: {
                    'User 1': {
                        'Application 1': '2',
                        'Application 2': '1'
                    },
                    'User 2': {
                        'Application 1': '1',
                        'Application 2': '1'
                    }
                }
            }, {
                name: 'Task 2',
                tasksCount: '3',
                taskCompletionTimeSeconds: '150',
                timeSpentPrApplication: {
                    'Application 1': '60',
                    'Application 2': '90'
                },
                individualTaskUserCount: {
                    'User 1': '2',
                    'User 2': '1'
                },
                individualTaskUserInteractionsCount: {
                    'User 1': {
                        'Application 1': '1',
                        'Application 2': '1'
                    },
                    'User 2': {
                        'Application 1': '1',
                        'Application 2': '0'
                    }
                }
            }];

    beforeEach(() => {
            wrapper = shallow( < TaskListComponent tasksList = {
                    tasksList
                }
                />);
            });

        it('should render a TasksListComponent', () => {
            expect(wrapper.find('TasksListComponent').length).toEqual(1);
        });

        it('should render a TaskHeaderComponent', () => {
            expect(wrapper.find('TaskHeaderComponent').length).toEqual(1);
        });

        it('should render a TaskFlowComponent', () => {
            expect(wrapper.find('TaskFlowComponent').length).toEqual(1);
        });

        it('should render three StatsComponent', () => {
            expect(wrapper.find('StatsComponent').length).toEqual(3);
        });

        it('should set the tasks state to the tasksList prop', () => {
            expect(wrapper.state('tasks')).toEqual(tasksList);
        });

        it('should set the indvTasks state to an empty object when no task is selected', () => {
            expect(wrapper.state('indvTasks')).toEqual({});
        });

        it('should set the indvTasks state to the selected task when a task is selected', () => {
            wrapper.instance().getTask({
                target: {
                    textContent: 'Task 1'
                }
            });
            expect(wrapper.state('indvTasks')).toEqual(tasksList[0]);
        })
    })