import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '../models/store-model';

@Pipe({
    name: 'storeDescriptionById',
    standalone: true
})

export class StoreDescriptionByIdPipe implements PipeTransform {
    transform(id: number, stores: Store[]): string {
        return stores.find(store => store.id == id)?.descricao
    }
}