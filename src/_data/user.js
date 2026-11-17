import Fetch from "@11ty/eleventy-fetch";

export default async function () {
	let url = "https://fdnd-agency.directus.app/items/snappthis_user?fields=*,groups.*";

	let json = await Fetch(url, {
		duration: "1d",
		type: "json",
	});

    console.log(json);
	return json;
};