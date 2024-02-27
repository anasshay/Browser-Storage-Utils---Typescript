import { local_storage, session_storage } from './storage.utils';

fdescribe('StorageUtils', () => {
  it('should store & retrieve item from local & session storage', () => {
    // LocalStorage
    local_storage.setItem('access_token', 'fake_token');
    expect(local_storage.getItem('access_token')).toBe('fake_token');

    // sessionStorage
    session_storage.setItem('access_token', 'fake_token');
    expect(session_storage.getItem('access_token')).toBe('fake_token');
  });

  it('should remove item from local & session storage', () => {
    // LocalStorage
    local_storage.setItem('access_token', 'fake_token');
    expect(local_storage.getItem('access_token')).toBe('fake_token');
    local_storage.removeItem('access_token');
    expect(local_storage.getItem('access_token')).toBeNull();

    // sessionStorage
    session_storage.setItem('access_token', 'fake_token');
    expect(session_storage.getItem('access_token')).toBe('fake_token');
    session_storage.removeItem('access_token');
    expect(session_storage.getItem('access_token')).toBeNull();
  });

  it('should clear all items from local & session storage', () => {
    // LocalStorage
    local_storage.clear();
    expect(localStorage.length).toBe(0);

    // sessionStorage
    session_storage.clear();
    expect(sessionStorage.length).toBe(0);
  });

  it('should not store null or undefined data and give a warning in the console', () => {
    spyOn(console, 'warn');
    local_storage.setItem('access_token', null);
    expect(console.warn).toHaveBeenCalled();
    local_storage.setItem('access_token', undefined);
    expect(console.warn).toHaveBeenCalled();
  });
});
