export default class DB {
    constructor(name, version, stores) {
        if(version == 0) {
            indexedDB.deleteDatabase(name);
        }
        let request = indexedDB.open(name, version)
        request.onupgradeneeded = (event) => {
            this.database = event.target.result;
            stores.forEach((store) => {
                let objectStore = this.database.createObjectStore(store.name, { keyPath: store.keyPath });
                store.indexes.forEach((index) => {
                    objectStore.createIndex(index.name, index.keyPath, { unique: index.unique });
                });
            });
    }
}
/*
    open database
        if version is 0, delete database
        open database
        if upgrade needed,
            create object store( create indexes )
*/