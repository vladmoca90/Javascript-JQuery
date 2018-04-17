describe('string-utilities', function() {
    describe('length()', function() {
        it('throws error when parameter is null', function() {
            expect(function() { length(null) }).toThrowError();
        })

        it('returns 0 when parameter is empty string', function() {
            expect(length('')).toBe(0);
        })

        it('returns text length when parameters is not null and not empty', function() {
            expect(length("Vlad")).toBe(4);
        })
    });

    describe('longestWord()', function() {
        it('throws error if parameter is null', function() {
            expect(function() { longestWord(null) } ).toThrowError();
        });
        
        it('throws error if parameter is empty', function() {
            expect(function() { longestWord([]) } ).toThrowError();
        });

        describe('if there are many words with the same maximum length', function() { 
            it('returns the first one', function() {
                var array = 'Vlad Alex John';

                expect(longestWord(array)).toBe('Vlad');
            });
        });

        describe('if one word is longer than all others', function() {
            it('returns the word', function() {
                var array = 'Alexandru Vlad Mocanu';

                expect(longestWord(array)).toBe('Alexandru');
            });
        });
    });

    describe('allElementsAreEven()', function() {
        it('throws error if list is empty', function() {

            expect(function() {allElementsAreEven([])}).toThrowError();
        });

        describe('if the list has only one element', function() {
            it('returns false if the element if not even', function() {
                var list = [1];

                expect(allElementsAreEven(list)).toBe(false);
            });
        });

         describe('if the list has odd elements', function() {
            it('returns false if at least one element if not even', function() {
                var list = [2, 4, 6, 7];

                expect(allElementsAreEven(list)).toBe(false);
            });
        });
    });

})

