# Database structure design

## Post

Refer to: https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/tweet-object

```json
{
    "post": {
        "created_at": "Thu Apr 06 15:24:15 +0000 2017",
        "id": 850006245121695744,
        "id_str": "850006245121695744",
        "text": "This is my first post on this app",
        "reply_count": 1000,
        "favorite_count": 2000,
        "user": {}, // see below user object
        // TODO: We would not have entities for the first version
        // https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/entities-object
        "entities": {
            "hashtags":[],
            "urls":[],
            "user_mentions":[],
            "media":[],
            "symbols":[],
            "polls":[]
        },
        // https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/extended-entities-object
        "extended_entities": {
            "media": []
        }
    }
}

```

## User

Refer to https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/user-object

```json
{
  "user": {
    "id": 2244994945,
    "id_str": "2244994945",
    "name": "Open Archive",
    "screen_name": "OpenArchive", // @OpenArchive
    "location": "Internet",
    "url": "https://OpenArchive.world/",
    "description": "OpenArchive official account",
    "verified": true,
    "followers_count": 477684,
    "friends_count": 1524,
    "favourites_count": 2151,
    "statuses_count": 3121,
    "created_at": "Sat Dec 14 04:35:55 +0000 2013",
    "utc_offset": -25200,
    "time_zone": "Pacific Time (US & Canada)",
    "lang": "en",
    "profile_image_url": "https://pbs.twimg.com/"
  }
}
```