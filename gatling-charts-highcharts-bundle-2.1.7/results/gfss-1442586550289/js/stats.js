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
        "total": "421",
        "ok": "421",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2442",
        "ok": "2442",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1791",
        "ok": "1791",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "488",
        "ok": "488",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2173",
        "ok": "2173",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2361",
        "ok": "2361",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2419",
        "ok": "2419",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 33,
        "percentage": 17
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 158,
        "percentage": 79
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.152",
        "ok": "49.152",
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
        "total": "421",
        "ok": "421",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2442",
        "ok": "2442",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1791",
        "ok": "1791",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "488",
        "ok": "488",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1946",
        "ok": "1946",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2173",
        "ok": "2173",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2361",
        "ok": "2361",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2419",
        "ok": "2419",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 9,
        "percentage": 5
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 33,
        "percentage": 17
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 158,
        "percentage": 79
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "49.152",
        "ok": "49.152",
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
