import { invalidAuthorError } from "../messages/Messages";

class Validator {
    /**
     * Validate that the author is a non-empty string
     * @param {string} author
     */
    static validateAuthor(author) {
        if (typeof author !== 'string' || author.trim().length === 0) {
            throw new Error(invalidAuthorError);
        }
    }
}

export default Validator;
