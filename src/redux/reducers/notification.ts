enum NotificationTypeEnum {
  Success = 'Success',
  Error = 'Error'
}

export interface INotification {
  notificationContent: string | null
  notificationType: NotificationTypeEnum | null
}

interface INotificationReducerAction {
  type: string
  payload: string
}

const initialState: INotification = {
  notificationContent: null,
  notificationType: null
}

const notificationReducer = (state = initialState, { type, payload }: INotificationReducerAction) => {
  return state
}

export default notificationReducer