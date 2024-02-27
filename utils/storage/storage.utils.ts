import { StorageObjectData, StorageObjectType } from './storage.types';

type StorageOptions = {
  api?: 'LocalStorage' | 'SessionStorage';
};

function getStorageApi(api: StorageOptions['api']): Storage {
  return api === 'SessionStorage' ? sessionStorage : localStorage;
}

function getItem<T extends StorageObjectType>(
  item: T,
  options: StorageOptions
): StorageObjectData<T>['data'] | null {
  const api = getStorageApi(options.api);
  const data = api.getItem(item.toString());

  if (data) {
    try {
      const dataToReturn = JSON.parse(data);
      return dataToReturn as StorageObjectData<T>['data'];
    } catch (_) {
      return data as StorageObjectData<T>['data'];
    }
  }

  return null;
}

function setItem<T extends StorageObjectType>(
  itemName: T,
  data: StorageObjectData<T>['data'],
  options: StorageOptions
): void {
  if (data === null || data === undefined) {
    console.warn(`Storage: ${itemName} data is null or undefined`);
    return;
  }

  const api = getStorageApi(options.api);
  const dataToSave = typeof data === 'string' ? data : JSON.stringify(data);

  api.setItem(itemName, dataToSave);
}

function removeItem<T extends StorageObjectType>(item: T, options: StorageOptions): void {
  const api = getStorageApi(options.api);
  api.removeItem(item);
}

function clear(options: StorageOptions): void {
  const api = getStorageApi(options.api);
  api.clear();
}

export const local_storage = {
  getItem: <T extends StorageObjectType>(item: T): StorageObjectData<T>['data'] | null =>
    getItem(item, { api: 'LocalStorage' }),
  setItem: <T extends StorageObjectType>(itemName: T, data: StorageObjectData<T>['data']): void =>
    setItem(itemName, data, { api: 'LocalStorage' }),
  removeItem: <T extends StorageObjectType>(item: T): void =>
    removeItem(item, { api: 'LocalStorage' }),
  clear: (): void => clear({ api: 'LocalStorage' }),
};

export const session_storage = {
  getItem: <T extends StorageObjectType>(item: T): StorageObjectData<T>['data'] | null =>
    getItem(item, { api: 'SessionStorage' }),
  setItem: <T extends StorageObjectType>(itemName: T, data: StorageObjectData<T>['data']): void =>
    setItem(itemName, data, { api: 'SessionStorage' }),
  removeItem: <T extends StorageObjectType>(item: T): void =>
    removeItem(item, { api: 'SessionStorage' }),
  clear: (): void => clear({ api: 'SessionStorage' }),
};
