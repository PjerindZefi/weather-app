import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | base-app', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`<BaseApp />`);

    assert.ok(document.getElementById('main-glimmer-app'), 'main element exists');
  });

  test('It updates weather name value correctly', async function(assert) {
    await render(hbs`<BaseApp />`);
    const inputElement = document.getElementById("weatherInput");
    inputElement.value = 'testingvalue';
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("input", false, true);
    inputElement.dispatchEvent(evt);

    ///data-test-weather-name-input
    assert.equal(document.getElementById('weatherName').textContent.trim(), 'testingvalue', 'weatherName updated correctly');
  });

  test('It removes weather name value correctly', async function(assert) {
    await render(hbs`<BaseApp />`);
    const inputElement = document.getElementById("weatherInput");
    inputElement.value = 'testingvalue';
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("input", false, true);
    inputElement.dispatchEvent(evt);

    inputElement.value = '';
    inputElement.dispatchEvent(evt);



    ///data-test-weather-name-input
    assert.equal(document.getElementById('weatherName').textContent.trim(), '', 'weatherName removed correctly');
  });
});
