export namespace Books {

    export interface BookRequest {
        maxResults: string;
        orderBy: string;
        q: string;
    }

    export interface BookResponse {
        totalItems: number;
        items: Array<BookDetail>;
    }

    export interface SimpleBookDetail {
        id: string;
        title: string;
        authors: Array<string>;
        thumbnail: string;
        publishedDate: string;
        price: number;
    }

    export interface BookDetail {
        kind: string;
        id: string;
        etag: string;
        selfLink: string;
        accessInfo: {
            accessViewStatus: string;
            country: string;
            embeddable: boolean;
            publicDomain: false;
            quoteSharingAllowed: boolean;
            textToSpeechPermission: string;
            viewability: string;
            webReaderLink: string;
            epub: {
                isAvailable: boolean;
            }
            pdf: {
                isAvailable: boolean;
            }
        }
        saleInfo: {
            country: string;
            isEbook: boolean;
            saleability: string;
            retailPrice: {
                amount: number;
                currencyCode: string;
            }
        }
        searchInfo: {
            textSnippet: string;
        }
        volumeInfo: {
            title: string;
            authors: Array<string>;
            allowAnonLogging: false;
            canonicalVolumeLink: string;
            categories: Array<string>;
            contentVersion: string;
            description: string;
            imageLinks: {
                smallThumbnail: string;
                thumbnail: string;
                medium: string;
            }
            industryIdentifiers: Array<{
                type: string;
                identifier: string;
            }>
            infoLink: string;
            language: string;
            maturityRating: string;
            pageCount: number;
            panelizationSummary: {
                containsEpubBubbles: boolean;
                containsImageBubbles: boolean;
            }
            previewLink: string;
            printType: string;
            publishedDate: string;
            readingModes: {
                text: boolean;
                image: boolean;
            };
        }
    }
}