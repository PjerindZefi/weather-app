import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

const inputEvent = document.createEvent("HTMLEvents");
inputEvent.initEvent("input", false, true);

module('Integration | Component | places-visited', function(hooks) {
  setupRenderingTest(hooks);

  test('places visited texbox shows and hides correctly ', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PlacesVisited />`);

    assert.ok(this.element.textContent);

    const placesInput = document.getElementById('placesVisitedInput');
    placesInput.value = 'London';
    
    placesInput.dispatchEvent(inputEvent);
    document.getElementById('saveDestinationButton').click();
    assert.notOk(placesInput.value, 'emptied after save destination click')
  });

  test('places visited list renders as expected', async function(assert) {
    await render(hbs`<PlacesVisited />`);
    const placesInput = document.getElementById('placesVisitedInput');
    placesInput.value = 'London';
    placesInput.dispatchEvent(inputEvent);
    document.getElementById('saveDestinationButton').click();
    placesInput.value = 'Madrid';
    placesInput.dispatchEvent(inputEvent);
    document.getElementById('saveDestinationButton').click();
    const list = document.getElementById('placesVisitedList');
    const listItems = list.getElementsByTagName('li')
    assert.equal(listItems.length, 2, 'two items added to list');
    assert.ok(listItems[0].textContent.includes('London'));
    assert.ok(listItems[1].textContent.includes('Madrid'));
  });

  test('places visited list gets removed correctly', async function(assert) {
    await render(hbs`<PlacesVisited />`);
    const placesInput = document.getElementById('placesVisitedInput');
    
    // add london to list
    placesInput.value = 'London';
    placesInput.dispatchEvent(inputEvent);
    document.getElementById('saveDestinationButton').click();
   
    // add madrid to list
    placesInput.value = 'Madrid';
    placesInput.dispatchEvent(inputEvent);
    document.getElementById('saveDestinationButton').click();
    
    const list = document.getElementById('placesVisitedList');
    const listItems = list.getElementsByTagName('li')
    assert.equal(listItems.length, 2, 'two items added to list');
    document.getElementById('removePlace-0').click();
    assert.equal(listItems.length, 1, 'two items added to list');
    assert.ok(listItems[0].textContent.includes('Madrid'), 'London removed, only madrid remains');


  });
});
