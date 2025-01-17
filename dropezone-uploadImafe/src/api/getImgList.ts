async function getImgList() {
    const baseUrl = "https://run.mocky.io/v3/aaab7941-6cdb-41f1-96f7-66b793cecb96";

    return await fetch(baseUrl, {
        method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
    });
}

export { getImgList };