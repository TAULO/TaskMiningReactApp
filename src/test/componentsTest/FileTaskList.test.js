import React from 'react'
import { mount, configure } from 'enzyme'
import FileTasksList from '../../components/FileTasksList'
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

describe('FileTasksList', () => {
  let wrapper
  let mockTasksList = [
    { name: 'task1', size: 10 },
    { name: 'task2', size: 20 },
    { name: 'task3', size: 30 }
  ]

  let mockDeleteFile = jest.fn()
  let mockPreviewFile = jest.fn()
  let mockDeleteAll = jest.fn()
  let mockAnalyseAll = jest.fn()

  beforeEach(() => {
    wrapper = mount(
      <FileTasksList 
        tasksList={mockTasksList} 
        deleteFile={mockDeleteFile} 
        previewFile={mockPreviewFile} 
        deleteAll={mockDeleteAll} 
        analyseAll={mockAnalyseAll} 
      />
    )
  })

  it('should display the total number of tasks in the tasks list', () => { 
      expect(wrapper.text()).toContain(`Total files (${mockTasksList.length})`) 
   })
})