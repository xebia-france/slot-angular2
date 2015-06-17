import {ComponentAnnotation as Component, ViewAnnotation as View, NgIf, NgFor} from 'angular2/angular2';
import {XkeSlotStore} from 'slot-store';
import {XkeSlot} from 'slot';

@Component({
    selector: 'xke-slots',
    appInjector: [XkeSlotStore]
})
@View({
    templateUrl: 'slots.html',
    directives: [NgIf, NgFor, XkeSlot]
})
export class XkeSlots {
    slotStore:XkeSlotStore;
    slotFilter:string = '';

    constructor(slotStore:XkeSlotStore) {
        this.slotStore = slotStore;
    }

    filter(searchFor:string) {
        this.slotFilter = searchFor;
    }

    getSlots() {
        return this.slotStore.slots.filter(s => {
            return !this.slotFilter || s.name.toLowerCase().indexOf(this.slotFilter.toLowerCase()) >= 0;
        });
    }
}