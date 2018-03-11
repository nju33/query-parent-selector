import queryParentElement from './query-parent-element';

describe('get-descendant', () => {
  beforeEach(() => {
    // tslint:disable-next-line no-inner-html
    (global as any).window.document.body.innerHTML = `
<!doctype html>
<html>
  <body>
    <div id="parent">
      <div>
        <div>
          <div>
            <div id="child"></div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
    `;
  });

  test('get element from selector string', () => {
    const result = queryParentElement('#child', '#parent');
    expect(result.id).toBe('parent');
  });

  test('get element from HTMLElement', () => {
    const child = (global as any).window.document.getElementById('child');
    const parent = (global as any).window.document.getElementById('parent');

    const result = queryParentElement(child, parent);
    expect(result.id).toBe('parent');
  });

  test('try to get from undefined', () => {
    const result1 = queryParentElement('#undefined', '#undefined');
    expect(result1).toBe(undefined);

    const result2 = queryParentElement('#child', '#undefined');
    expect(result2).toBe(undefined);
  });
});
