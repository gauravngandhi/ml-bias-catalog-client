
class CaseService {
    constructor() {}

    // createCase = course => {
    //     const promise = new Promise((resolve, reject) =>{
    //         var data = JSON.stringify({
    //             "id": new Date().getTime(),
    //             "sections": [],
    //             "modules": [],
    //             "title":"New Course"
    //         });
    //
    //         var xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;
    //
    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === 4) {
    //                 resolve(JSON.parse(this.responseText));
    //             }
    //         });
    //
    //         xhr.open("POST", "http://localhost:8080/api/courses");
    //         xhr.setRequestHeader("Content-Type", "application/json");
    //         xhr.setRequestHeader("credentials", "include");
    //         xhr.setRequestHeader("cache-control", "no-cache");
    //         xhr.setRequestHeader( 'Access-Control-Allow-Credentials', 'true');
    //         xhr.setRequestHeader("Postman-Token", "c1bf79bd-411e-4ad3-a711-ae7687631323");
    //
    //         xhr.send(data);
    //     })
    //     return promise;
    // }

    // findCaseById = caseId =>{
    //     const promise = new Promise((resolve, reject) => {
    //         var data = JSON.stringify(false);
    //
    //         var xhr = new XMLHttpRequest();
    //         xhr.withCredentials = true;
    //
    //         xhr.addEventListener("readystatechange", function () {
    //             if (this.readyState === 4) {
    //                 resolve(JSON.parse(this.responseText));
    //             }
    //         });
    //
    //         xhr.open("GET", "http://localhost:8080/api/courses/"+courseId);
    //         xhr.setRequestHeader("Content-Type", "application/json");
    //         xhr.setRequestHeader("credentials", "include");
    //         xhr.setRequestHeader("cache-control", "no-cache");
    //         xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');
    //         xhr.setRequestHeader("Postman-Token", "d472633e-01ff-45b7-a945-097d0dbbc7f0");
    //
    //         xhr.send(data);
    //     })
    //
    //     return promise;
    // }

    findAllCases = () =>{

        const promise = new Promise((resolve, reject) => {

            var data = null;

            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === 4) {
                    console.log(this.responseText)
                    resolve(JSON.parse(this.responseText));
                }
            });

            xhr.open("GET", "https://cors-anywhere.herokuapp.com/https://radiant-forest-87925.herokuapp.com/"+"api/dataset");
            xhr.setRequestHeader("cache-control", "no-cache");
            xhr.setRequestHeader("Postman-Token", "1aa486c8-c855-4dad-abed-1237dfa5c423");

            xhr.send(data);

        })
        return promise;
    }

}
export default CaseService