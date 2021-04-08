

class StorageUtils {
    constructor() {
        this.storage = localStorage.getItem('dairy-items') ? JSON.parse(localStorage.getItem('dairy-items')) : []
    }

    createEntry(entry) {
        return {
            date: new Date(entry.date).toDateString(),
            title: entry.title,
        }
    }

    addEntries(entry) {
        this.storage.push(this.createEntry(entry))
        localStorage.setItem('dairy-items', JSON.stringify(this.storage))
    }

    getEntries() {
        return this.storage
    }

}

const storageUtils = new StorageUtils

export default storageUtils