import Fetch from "@11ty/eleventy-fetch";

// De unieke UUID van Anne fleur's
const userUuid = "5e9589a5-ebfa-4a99-87a6-010f2f571444";

export default async function () {
	let url = "https://fdnd-agency.directus.app/items/snappthis_user?fields=*,groups.*";

	let json = await Fetch(url, {
		duration: "1d",
		type: "json",
	});

// console.log(userUuid);

const user = json.data.find (
 (user) => user.uuid === userUuid
);

// console.log(user);

return user;

}