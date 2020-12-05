export interface IResponseBookmark {
	"index": string;
	"title": string;
	"url": string;
	"id": number;
	"parentId": string;
	"dateAddedLocal": string;
	"dateAddedUTC": string;
}

export interface IResponseBookmarkTag {
	"index": string;
	"title": string;
	"url": string;
	"id": number;
	"parentId": string;
	"dateAddedLocal": string;
	"dateAddedUTC": string;
	"relevantTags": IResponseBookmark[];
}