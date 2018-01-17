import { Observable } from 'rxjs'

export class DiscountRepository {
    constructor(db) {
        this._db = db.ref('discounts')
    }

    getStream() {
        return Observable.fromEvent(this._db, 'value').map(res => res.val())
    }
}
