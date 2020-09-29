import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { A as emberArray } from '@ember/array';

export default class PlacesVisitedComponent extends Component {
    @tracked placesVisitedList = emberArray([]);

    @tracked currentAddedPlace = '';
    updateCurrentPlaceplaceInput(placeInput){
        this.currentAddedPlace = placeInput.target.value;
    }
    addDestinationVisited(){
        this.placesVisitedList.addObject(this.currentAddedPlace);
        this.currentAddedPlace = '';
    }
    removeDestinationVisited(value){
        this.placesVisitedList.removeObject(value);
    }
}
