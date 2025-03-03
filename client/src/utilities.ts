
///** Converts a camelCase string to a properly spaced Title Case string. **/
export function formatToTitleCase(str: string) {
	let uppercaseIndices = []

	// Collect indices of uppercase letters
	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i].toUpperCase()) {
			uppercaseIndices.push(i)
		}
	}

	// If there are uppercase letters
	if (uppercaseIndices.length > 0) {
		const words: string[] = []

		// Handle the first word before the first uppercase letter
		let currentWord = str.slice(0, uppercaseIndices[0]);
		words.push(currentWord[0].toUpperCase() + currentWord.slice(1));

		// Loop through the indices of uppercase letters
		for (let i = 1; i < uppercaseIndices.length; i++) {
			currentWord = str.slice(uppercaseIndices[i - 1], uppercaseIndices[i]);
			words.push(currentWord[0].toUpperCase() + currentWord.slice(1));
		}

		// Handle the last word after the last uppercase letter
		currentWord = str.slice(uppercaseIndices[uppercaseIndices.length - 1]);
		words.push(currentWord[0].toUpperCase() + currentWord.slice(1));

		return words.join(" ");
	}

	// If no uppercase letters are found, just capitalize the first letter
	return str[0].toUpperCase() + str.slice(1);
}

// requires jsx file
//function handleFlash(inputName: string, state: Flash): ReactNode {
//	const messages = state?.message || []
//	console.log(`messages array: ${messages}`)
//	return messages.filter((message) =>
//		message.path === inputName).map((msg, index) => <p key={ index } > { formatToTitleCase(msg.path)
//}: { msg.msg } </p>
//			)
//	}

