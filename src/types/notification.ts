export enum NotificationTypeEnum {
  Success = 'Success',
  Error = 'Error'
}

export interface INotification {
  notificationContent: string | null
  notificationType: NotificationTypeEnum | null
}

export interface INotificationReducerAction {
  type: string
  payload: string
}
