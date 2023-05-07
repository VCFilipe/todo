import { Items, WeekDayProps } from '@/components/Todo/components/WeekDay'

export default abstract class LocalStorage {
  private static _storage: Storage = window.localStorage
  private static STORAGE_KEY = 'WEEKLY_TODO_APP'

  static getAllTasks(): WeekDayProps[] {
    const items = LocalStorage._storage.getItem(this.STORAGE_KEY)

    return JSON.parse(items ?? '')
  }

  private saveAll(data: WeekDayProps[]) {
    LocalStorage._storage.setItem(
      LocalStorage.STORAGE_KEY,
      JSON.stringify(data),
    )
  }

  addTask(task: Items, dayOfTheWeek: string): WeekDayProps[] {
    const tasks = LocalStorage.getAllTasks()
    tasks.find((x) => x.day === dayOfTheWeek)?.tasks.concat(task)

    this.saveAll(tasks)

    return LocalStorage.getAllTasks()
  }
}
