const c ="https://cors-anywhere.herokuapp.com/"
const url = "https://db-bias-server.herokuapp.com/"
class CaseService {
    constructor() {}

    createCase = (year, company, industry, system_purpose, type_of_bias, impact, link, ml_model, location) => {
            var obj = {
            "time_frame": year,
            "company": company,
            "industry": industry,
            "system_purpose": system_purpose,
            "type_of_bias": type_of_bias,
            "impact": impact,
            "link": link,
            "ml_model": ml_model,
             "location": location
            }

            return fetch(c+url +
                "api/dataset" , {
                method: 'post',
                body: JSON.stringify(obj),
                credentials: "omit",
                headers: {
                    'Content-type': 'application/json',
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate",
                    "Connection": "keep-alive",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
                }
            }).then(response => response.json())
                .catch(error => {
                    console.log('request failed', error);
                });
        };

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

    findAllCases = () =>
        {
            return fetch(c+url +
                                "api/dataset" , {
                method: 'get',
                credentials: "omit",
                headers: {
                    'Content-type': 'application/json',
                    "Accept": "*/*",
                    "Accept-Encoding": "gzip, deflate",
                    "Connection": "keep-alive",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                    "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
                }
            }).then(response => response.json())
                .catch(error => {
                    console.log('request failed', error);
                });
        };

    findCasesByFilter = (company, bias) =>
    {
        if(!company){
            company = "All"
        }
        if(!bias){
            bias = "All"
        }

        return fetch(c+url +
            "api/filter/"+bias+"/"+company, {
            method: 'get',
            credentials: "omit",
            headers: {
                'Content-type': 'application/json',
                "Accept": "*/*",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
                "Access-Control-Allow-Methods":"GET, POST, PUT, DELETE, OPTIONS"
            }
        }).then(response => {if(response){console.log(response); return response.json()}
                                        else{
                                            console.log(response);
                                            var o = {"year":"0000", "company":"No result", "industry":"No result", "type_of_bias":"N/A", "link": "N/A"};
                                            return o.json()
                                        }
        })
            .catch(error => {
                console.log('request failed', error);
            });
    };


}
export default CaseService