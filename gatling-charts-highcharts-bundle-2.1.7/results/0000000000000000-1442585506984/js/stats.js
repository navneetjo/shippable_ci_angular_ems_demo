var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2077",
        "ok": "2077",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1525",
        "ok": "1525",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "370",
        "ok": "370",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1609",
        "ok": "1609",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1809",
        "ok": "1809",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1997",
        "ok": "1997",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2058",
        "ok": "2058",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 27,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 164,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50.492",
        "ok": "50.492",
        "ko": "-"
    }
},
contents: {
"req_get-request-6d733": {
        type: "REQUEST",
        name: "get request",
path: "get request",
pathFormatted: "req_get-request-6d733",
stats: {
    "name": "get request",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "291",
        "ok": "291",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2077",
        "ok": "2077",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1525",
        "ok": "1525",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "370",
        "ok": "370",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1609",
        "ok": "1609",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1809",
        "ok": "1809",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1997",
        "ok": "1997",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2058",
        "ok": "2058",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 27,
        "percentage": 14
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 164,
        "percentage": 82
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "50.492",
        "ok": "50.492",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
