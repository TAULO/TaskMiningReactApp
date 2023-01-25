import useFetch from './useFetch'

export default function useAnalyse(data) {

    const taskData = useFetch(`http://localhost:5104/api/tasks/analyse/data=${data}`)
    const ui = useFetch(`http://localhost:5104/api/tasks/analyse/ui=${data}`)
    const repeatableUI = useFetch(`http://localhost:5104/api/tasks/analyse/repeatable-ui=${data}`)

    const totalTaskData = useFetch(`http://localhost:5104/api/tasks/analyse/data`)
    const totalTaskUI = useFetch(`http://localhost:5104/api/tasks/analyse/ui`)
    const completionTime = useFetch(`http://localhost:5104/api/tasks/analyse/completion-time`)
    const average = useFetch("http://localhost:5104/api/tasks/analyse/average")
    const taskCount = useFetch("http://localhost:5104/api/tasks/analyse/total")
    const users = useFetch("http://localhost:5104/api/tasks/analyse/users")
    const uiCount = useFetch("http://localhost:5104/api/tasks/analyse/total-ui")
    const stepsCount = useFetch("http://localhost:5104/api/tasks/analyse/total-steps")
    const apps = useFetch("http://localhost:5104/api/tasks/analyse/apps")

    return { taskData, ui, totalTaskData, totalTaskUI, completionTime, average, taskCount, users, uiCount, stepsCount, apps, repeatableUI }
}
