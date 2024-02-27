# Storage Helper

This is a simple utility module to interact with browser storage (localStorage and sessionStorage) in TypeScript. It provides methods to easily get, set, remove, and clear items from the storage.
Additionally, this helper provides the exact type of the stored values.

## Installation

This module doesn't require any installation. You can directly include it in your project.

## Usage

### Importing

```typescript
import { local_storage, session_storage } from <path-to-file>;
```

### Methods

#### `getItem<T>(item: T): T | null`

Retrieves the value of the specified item from the storage.

- `item`: The key of the item to retrieve.

#### `setItem<T>(itemName: T, data: T): void`

Stores the specified value with the specified key in the storage.

- `itemName`: The key under which to store the value.
- `data`: The value to store.

#### `removeItem<T>(item: T): void`

Removes the specified item from the storage.

- `item`: The key of the item to remove.

#### `clear(): void`

Clears all items from the storage.

### Examples

```typescript
// Set item in localStorage
local_storage.setItem('user', { name: 'John', age: 30 });

// Get item from localStorage
const user = local_storage.getItem('user');

// Remove item from localStorage
local_storage.removeItem('user');

// Clear all items from localStorage
local_storage.clear();
```
