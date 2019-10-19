interface INotificationReducerAction {
  type: string
  payload: object
}

enum NotificationTypeEnum {
  Success = 'Success',
  Error = 'Error'
}

export interface INotificationState {
  notificationContent: string | null
  notificationType: NotificationTypeEnum | null
}

const initialState: INotificationState = {
  notificationContent: null,
  notificationType: null
}

const notificationReducer = (state = initialState, { type, payload }: INotificationReducerAction) => {
  return state
}

export default notificationReducer
