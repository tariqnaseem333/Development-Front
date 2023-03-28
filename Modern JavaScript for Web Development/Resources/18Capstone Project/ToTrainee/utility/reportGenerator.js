const exec = require("child-process-promise").exec
const fs = require("fs")
const path = require("path")
class Module {
    constructor(suite, test, status) {
        this.suite = suite;
        this.test = test;
        this.status = status;
    }
}

function reportGenerator(reportObj) {
    var reportData = [];
    let failed=0;
    let passed=0;
    let report={};
    if (reportObj) {
        for (iterator of reportObj.testResults[0].assertionResults) {
            let title = iterator.title.split('-');
            if (iterator.status == "passed") {
                reportData.push(new Module(title[0], title[1], iterator.status))
                passed+=1
            } else {
                reportData.push(new Module(title[0], title[1], iterator.status))
                failed+=1
            }
        }
        report = {passed:passed,
            failed:failed,
        reportData:reportData}

        return report;
    }

}
console.log("started testing");
fs.openSync("../result.json", "w")

exec("npm test").then((data) => data).catch((err) => err).then((data) => {
    console.log("testing done, generating report");
    let interval = setInterval(() => {
        let report = readReport()
        if (report) {
            parseReport(report)
            clearInterval(interval)
        } 
    }, 500)

    // setTimeout(() => {
    //     let report = fs.readFileSync(path.join(__dirname, "../result.json"), "utf8")
    //     console.log("here", report);
    //     // let formattedReport = reportGenerator(JSON.parse(report))
    //     // fs.writeFileSync("../result.json", JSON.stringify(formattedReport))
    //     // console.log("report generated");
    // }, 5000)
})


readReport = () => {
    return fs.readFileSync(path.join(__dirname, "../result.json"), "utf8")
}


parseReport = (report) => {
    let formattedReport = reportGenerator(JSON.parse(report))
    let data=JSON.stringify(formattedReport);
    fs.writeFileSync("../result.json", data)
    console.log("report generated");
}



removeinterval = () => {

}