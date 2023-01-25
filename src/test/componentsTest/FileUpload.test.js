import React from 'react'
import { mount, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15';
import FileUpload from '../../components/FileUpload'
import UploadFilesComponent from '../../components/UploadFilesComponent' 
import FileTasksList from '../../components/FileTasksList'
import SpinnerComponent from '../../components/SpinnerComponent'

configure({ adapter: new Adapter() });

describe('FileUpload', () => {
  let wrapper
  const mockReadFiles = jest.fn()
  const mockSearch = jest.fn()
  const mockPreviewFile = jest.fn()
  const mockDeleteFile = jest.fn()
  const mockDeleteAllFiles = jest.fn()
  const mockPromise = jest.fn()

  beforeEach(() => {
    wrapper = mount(
      <FileUpload
        readFiles={mockReadFiles}
        search={mockSearch}
        previewFile={mockPreviewFile}
        deleteFile={mockDeleteFile}
        deleteAllFiles={mockDeleteAllFiles}
        promise={mockPromise}
      />
    )
  })

  it('should render the UploadFilesComponent component', () => {
    expect(wrapper.find(UploadFilesComponent)).toHaveLength(1)
  })

  it('should render the FileTasksList component', () => {
    expect(wrapper.find(FileTasksList)).toHaveLength(1)
  })

  it('should render the SpinnerComponent component', () => {
    expect(wrapper.find(SpinnerComponent)).toHaveLength(1)
  })
})