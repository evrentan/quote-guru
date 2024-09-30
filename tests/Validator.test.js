import Validator from '../src/utils/Validator';
import Messages from "../src/messages/Messages";

describe('Validator', () => {
    test('should throw an error for invalid author input', () => {
        expect(() => Validator.validateAuthor(null)).toThrow(Messages.invalidAuthorError);
        expect(() => Validator.validateAuthor('')).toThrow(Messages.invalidAuthorError);
        expect(() => Validator.validateAuthor(123)).toThrow(Messages.invalidAuthorError);
    });

    test('should not throw an error for valid author input', () => {
        expect(() => Validator.validateAuthor('Valid Author')).not.toThrow();
    });
});
