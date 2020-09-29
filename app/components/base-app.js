import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class BaseAppComponent extends Component {
    @tracked currentName;
    changedName(nameInput){
        this.currentName = nameInput.target.value;
    }
}
