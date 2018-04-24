describe('math-utilities', function () {

    it('throws an error if text empty', function () {
        var text = '';

        expect(function() {becomeAbbreviated('') }).toThrowError();
    });

    describe('becomeAbbreviated(text)', function () {
        it('adds a dot at the end', function () {
            var text = 'a';

            expect(becomeAbbreviated('a')).toBe('a.');
        });
    });

    describe('becomeAbbreviated(splitText)', function () {
        it('abbreviates the entire name', function () {
            var splitText = 'Vlad Mocanu';

            expect(becomeAbbreviated('Vlad Mocanu')).toBe('Vlad M.');
        });
    });
});