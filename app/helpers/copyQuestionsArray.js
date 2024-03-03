export default function copyQuestionsArray(apiResponse) {
    if (apiResponse.response_code !== 0) {
        return null;
    }

    return JSON.parse(JSON.stringify(apiResponse.results));
}
