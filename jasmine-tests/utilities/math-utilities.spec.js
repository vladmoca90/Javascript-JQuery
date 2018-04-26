describe('capitalizeFirstLetter(text)', function () {
    it('throws an error if text is empty or whitespace', function () {

        var text = '';

        expect(function() {capitalizeFirstLetter(text)}).toThrowError;
    });

    it('throws an error if text is empty or whitespace', function () {

        var text = ' ';

        expect(function() {capitalizeFirstLetter(text)}).toThrowError;
    });

    describe('The text has one word only', function () {
        it('returns the letter as capital letter', function () {

            var text = 'a';

            expect(capitalizeFirstLetter(text)).toBe('A');
        });
    });

    describe('The text has an entire sentence', function () {
        it('returns the text with capitalized letters', function () {

            var text = 'my name is vlad mocanu';

            expect(capitalizeFirstLetter(text)).toBe('My Name Is Vlad Mocanu');
        });
    });
});