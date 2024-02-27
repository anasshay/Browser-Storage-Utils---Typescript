type StorageObjectMap = {
  access_token: string;
  fcmToken: string;
  break: boolean;
};

export type StorageObjectType = 'access_token' | 'fcmToken' | 'break';

export type StorageObjectData<T extends StorageObjectType> = {
  type: T;
  data: StorageObjectMap[T];
};
