async function getImgList() {
    const baseUrl = "https://run.mocky.io/v3/2545ebc3-ab28-427e-ac12-a771f495aec7";

    return await fetch(baseUrl, {
        method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
    });
}

export { getImgList };