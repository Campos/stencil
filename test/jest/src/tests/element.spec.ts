import { newPage } from '../../../../dist/testing';


describe('@Element', () => {

  it('should read the host elements attribute', async () => {
    // create a new puppeteer page
    const page = await newPage();

    // load the page with html content
    await page.setContent(`
      <element-cmp host-element-attr="Marty McFly"></element-cmp>
    `);

    // select the "element-cmp" element within the page (same as querySelector)
    // and once it's received, then return the element's "textContent" property
    expect(await page.$('element-cmp').text()).toBe('Hello, my name is Marty McFly');
  });

});