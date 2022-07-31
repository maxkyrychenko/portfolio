export const isEmail = errorMsg => {
	return value => {
		const result =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
				value
			);

		return result || errorMsg;
	};
};

export const isNotEmpty = errorMsg => {
	return value => {
		const result = value.length !== 0;

		return result || errorMsg;
	};
};

export const isMinLength = (length, errorMsg) => {
	return value => {
		let result;

		if (typeof value === "number") {
			result = value > length;
		} else {
			result = value.length > length;
		}

		return result || errorMsg;
	};
};

export const isMaxLength = (length, errorMsg) => {
	return value => {
		let result;

		if (typeof value === "number") {
			result = value < length;
		} else {
			result = value.length < length;
		}

		return result || errorMsg;
	};
};
