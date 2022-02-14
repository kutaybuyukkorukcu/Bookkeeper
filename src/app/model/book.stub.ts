import { Books } from "./book.model";

export const stubSimpleBookDetail: Books.SimpleBookDetail = {
    "id": "PZQqEAAAQBAJ",
    "title": "ANGULARJS",
    "authors": [
        "ŞERİF AYDIN",
        "KODLAB YAYIN"
    ],
    "price": 44,
    "publishedDate": "2018",
    "thumbnail": "http://books.google.com/books/content?id=PZQqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
}

export const stubBookRequest: Books.BookRequest = {
    maxResults: '1',
    orderBy: 'relevance',
    q: 'angular'
}

export const stubBookDetail: Books.BookDetail = {
    "kind": "books#volume",
    "id": "PZQqEAAAQBAJ",
    "etag": "yDrJcQjQtoo",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/PZQqEAAAQBAJ",
    "volumeInfo": {
        "title": "ANGULARJS",
        "authors": [
            "ŞERİF AYDIN",
            "KODLAB YAYIN"
        ],
        "publisher": "KODLAB YAYIN DAĞITIM YAZILIM LTD.ŞTİ.",
        "publishedDate": "2018",
        "description": "Kitapta, AngularJS’in giriş seviyesinden orta seviyeye kadar olan konularına yer verilmiş, böylelikle okuyucunun hem AngularJS’in temellerini öğrenmesi hem de uygulama ve proje geliştirmesi amaçlanmıştır. “Az kod, çok iş” mantığına dayanan AngularJS, two way binding (çift yönlü veri işleme) yapısı ile uygulamaların büyüdükçe güzelleşmesini, yani geliştirilebilir ve kullanılabilir olmasını sağlamaktadır. Kitapta, Wep Api, TypeScript, Visual Studio Code, AngularJS Bootstrap, AngularJS Meterial Template gibi konulara da yer verilerek, eserin içeriğinin zengin tutulması sağlanmıştır. • AngularJS Kullanımı • AngularJS Expression • AngularJS Modules • AngularJS Directives • AngularJS Scope • AngularJS Databinding • AngularJS Events • AngularJS Functions • AngularJS Filters • AngularJS Validations • AngularJS Messages • AngularJS CSS Classes • AngularJS Animations • AngularJS Dependency Injection • AngularJS Services • AngularJS Factory • AngularJS $HTTP • Web Api 2 • ASP.Net MVC • AngularJS Material Template • AngularJS UI Bootstrap • Visual Studio Code • Github • Typescript • Event Binding ve Component • ve Daha Fazlası...",
        "industryIdentifiers": [
            {
                "type": "ISBN_13",
                "identifier": "9786052118047"
            },
            {
                "type": "ISBN_10",
                "identifier": "6052118040"
            }
        ],
        "readingModes": {
            "text": false,
            "image": true
        },
        "pageCount": 430,
        "printType": "BOOK",
        "categories": [
            "Computers"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
        },
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=PZQqEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=PZQqEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "tr",
        "previewLink": "http://books.google.com.tr/books?id=PZQqEAAAQBAJ&printsec=frontcover&dq=angular&hl=&cd=1&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=PZQqEAAAQBAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=PZQqEAAAQBAJ"
    },
    "saleInfo": {
        "country": "TR",
        "saleability": "FOR_SALE",
        "isEbook": true,
        "listPrice": {
            "amount": 44,
            "currencyCode": "TRY"
        },
        "retailPrice": {
            "amount": 44,
            "currencyCode": "TRY"
        },
        "buyLink": "https://play.google.com/store/books/details?id=PZQqEAAAQBAJ&rdid=book-PZQqEAAAQBAJ&rdot=1&source=gbs_api",
        "offers": [
            {
                "finskyOfferType": 1,
                "listPrice": {
                    "amountInMicros": 44000000,
                    "currencyCode": "TRY"
                },
                "retailPrice": {
                    "amountInMicros": 44000000,
                    "currencyCode": "TRY"
                }
            }
        ]
    },
    "accessInfo": {
        "country": "TR",
        "viewability": "PARTIAL",
        "embeddable": true,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
            "isAvailable": false
        },
        "pdf": {
            "isAvailable": true,
            "acsTokenLink": "http://books.google.com.tr/books/download/ANGULARJS-sample-pdf.acsm?id=PZQqEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
        },
        "webReaderLink": "http://play.google.com/books/reader?id=PZQqEAAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
    },
    "searchInfo": {
        "textSnippet": "Kitapta, AngularJS’in giriş seviyesinden orta seviyeye kadar olan konularına yer verilmiş, böylelikle okuyucunun hem AngularJS’in temellerini öğrenmesi hem de uygulama ve proje geliştirmesi amaçlanmıştır. “Az kod, çok ..."
    }
}