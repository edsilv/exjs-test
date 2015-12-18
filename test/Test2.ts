var json = {
	"@id": "http://wellcomelibrary.org/iiif/b1818893x/manifest",
	"service": [
		{
			"@id": "http://wellcomelibrary.org/iiif/accepttermslogin",
			"profile": "http://iiif.io/api/auth/0/login",
			"label": "Archival material less than 100 years old",
			"service": [
				{
				"@id": "http://wellcomelibrary.org/iiif/tokenterms",
				"profile": "http://iiif.io/api/auth/0/token"
				},
				{
				"@id": "http://wellcomelibrary.org/iiif/logout",
				"profile": "http://iiif.io/api/auth/0/logout",
				"label": "Log out of Wellcome Library",
				"description": "Log out of Wellcome Library"
				}
			]
		}
	]
}

var result = json.en().en().traverseUnique(x => x.Connections).first();
console.log(result);