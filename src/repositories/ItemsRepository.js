import { Observable } from 'rxjs'

export class ItemsRepository {
    constructor(db) {
        this._db = db.ref('items')
    }

    getStream() {
        return Observable.fromEvent(this._db, 'value').map(res => res.val())
    }
}
