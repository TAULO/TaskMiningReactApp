import React from 'react';
import { shallow, configure } from 'enzyme';
import TasksListComponent from '../../components/TasksListComponent';
import TaskListItem from '../../components/TaskListItem';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('TasksListComponent', () => {
  let wrapper;
  const tasksList = [
    { name: 'Task 1', tasksCount: '5', taskCompletionTimeSeconds: '300' },
    { name: 'Task 2', tasksCount: '3', taskCompletionTimeSeconds: '150' }
  ];
  const orderName = jest.fn();
  const orderSteps = jest.fn();
  const orderLongestTask = jest.fn();
  const search = jest.fn();
  const getTask = jest.fn();

  beforeEach(() => {
    wrapper = shallow(
      <TasksListComponent
        tasksList={tasksList}
        orderName={orderName}
        orderSteps={orderSteps}
        orderLongestTask={orderLongestTask}
        search={search}
        getTask={getTask}
      />
    );
  });

  it('should render a TaskListItem for each task in the tasksList prop', () => {
    expect(wrapper.find(TaskListItem).length).toEqual(tasksList.length);
  });

  it('should pass the correct props to each TaskListItem', () => {
    tasksList.forEach((task, index) => {
      expect(
        wrapper
          .find(TaskListItem)
          .at(index)
          .props()
      ).toEqual({
        index: index,
        task: task,
        selectedTasks: wrapper.state('selectedTasks'),
        setSelectedTasks: wrapper.instance().setSelectedTasks
      });
    });
  });

  it('should set the selectedTasks state when the setSelectedTasks function is called', () => {
    wrapper.instance().setSelectedTasks([{ name: 'Task 1' }]);
    expect(wrapper.state('selectedTasks')).toEqual([{ name: 'Task 1' }]);
  });

  it('should call the navigate function with the correct arguments when the analyseSelected function is called', () => {
    wrapper.instance().analyseSelected();
    expect("navigate").toHaveBeenCalledWith(
      '/analyse/selected',
      {
        state: {
          name: wrapper.state('inputRef').current.value,
          tasks: wrapper.state('selectedTasks')
        }
      }
    );
  });

  it('should call the navigate function with the correct arguments when the analyseAll function is called', () => {
    wrapper.instance().analyseAll();
    expect("navigate").toHaveBeenCalledWith(
      '/analyse/all',
      {
        state: {
          name: wrapper.state('inputRef').current.value,
          tasks: tasksList
        }
      }
    );
  });
});


