const MongoDBUtil = require('../../../modules/mongodb/mongodb.module').MongoDBUtil;

describe('MongoDBUtil', () => {
    describe('mongodb.util file', () => {
        it('should read the mongodb.util file', () => {
            expect(MongoDBUtil).toBeTruthy();
            expect(typeof MongoDBUtil).toBe('object');
        });

        it('should confirm init function exists', () => {
            expect(MongoDBUtil.init).toBeTruthy();
            expect(typeof MongoDBUtil.init).toBe('function');
        });
    });
});