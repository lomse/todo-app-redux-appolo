import { INotification, INotificationReducerAction } from '../../types/notification'

const initialState: INotification = {
  notificationContent: null,
  notificationType: null
}

const notificationReducer = (state = initialState, { type, payload }: INotificationReducerAction) => {
  return state
}

export default notificationReducer
