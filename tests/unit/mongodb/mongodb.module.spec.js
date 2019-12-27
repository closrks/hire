const MongoDBModule = require('../../../modules/mongodb/mongodb.module');

describe('MongoDBModule', () => {
    describe('mongodb.module file', () => {
        it('should read the mongodb.module file', () => {
            expect(MongoDBModule).toBeTruthy();
            expect(typeof MongoDBModule).toBe('object');
        });

        it('should confirm MongoDBUtil exists', () => {
            expect(MongoDBModule.MongoDBUtil).toBeTruthy();
            expect(typeof MongoDBModule.MongoDBUtil).toBe('object');
        });
    });
});