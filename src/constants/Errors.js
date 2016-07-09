export const MISSING_ACTION_TYPE = 'reducer called with missing action.type'
export const INCORRECT_REDUCER_PARAM = (expectedType, actualType) => {
	return `Incorrect action data. Expected ${expectedType}, but got ${actualType}`;
}
