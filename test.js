import { Selector } from 'testcafe';

fixture('TestCafe example page').page(
    'https://devexpress.github.io/testcafe/example/'
);

test.meta('smoke', 'true')("Should submit developer's name successfully", async user => {
    // To interact with a DOM element, we must use the Selector function
    const interfaceSelect = Selector('#preferred-interface');
    const interfaceOption = interfaceSelect.find('option');

    await user
        .typeText('#developer-name', 'Sourav')
        .click('#remote-testing')
        .click(interfaceSelect)
        .click(interfaceOption.withText('Both'))
        .expect(interfaceSelect.value)
        .eql('Both')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText)
        .eql('Thank you, Sourav!');
});

test.meta('smoke', 'true')("test 2", async user => {
    // To interact with a DOM element, we must use the Selector function
    const interfaceSelect = Selector('#preferred-');
    const interfaceOption = interfaceSelect.find('option');

    await user
        .typeText('#developer-name', 'Sourav')
        .click('#remote-testing')
        .click(interfaceSelect)
        .click(interfaceOption.withText('Both'))
        .expect(interfaceSelect.value)
        .eql('Both')
        .click('#submit-button')
        .expect(Selector('#article-header').innerText)
        .eql('Thank you, Sourav!');
});