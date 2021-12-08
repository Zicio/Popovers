import ButtonWidget from '../ButtonWidget';

test('should render DOM', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.getElementById('container');
  const widget = new ButtonWidget(container);
  widget.bindToDOM();
  expect(container.innerHTML).toEqual(ButtonWidget.markup);
});

test('should show and remove popovers', () => {
  document.body.innerHTML = '<div id="container"></div>';
  const container = document.getElementById('container');
  const widget = new ButtonWidget(container);
  widget.bindToDOM();
  const submit = container.querySelector(ButtonWidget.submitSelector);
  const popovers = container.querySelector(ButtonWidget.popoversSelector);
  submit.click();
  expect(popovers.classList.contains('active')).toBeTruthy();
  submit.click();
  expect(popovers.classList.contains('active')).toBeFalsy();
});
