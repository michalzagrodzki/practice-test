/*import httpService from "./httpservice";
const domain = "/practices" */

const practice = {
  get: /* async */ function()
  {
    try {
      const mockResponse = [
        {
          id: 1,
          title: "Questions for practice test 1", 
          body: "This is a practice test with question to test 1"
        },
      ];
      return mockResponse;
      // return await httpService.httpGet(`${domain}`);
      
    } catch (error) {
      return error;
    }
  },
  single: /* async */ function(request)
  {
    // const id = request.id;
    try {
      const mockResponse = {
        id: 1,
        body: "This is a practice question",
        answers: [
          {
            id: "A",
            body: "Answer A"
          },
          {
            id: "B",
            body: "Answer B"
          },
          {
            id: "C",
            body: "Answer B"
          },
          {
            id: "D",
            body: "Answer B"
          },
        ],
        correctAnswer: "B"
      };
      return mockResponse;
      // return await httpService.httpGet(`${domain}/${id}`);
    } catch (error) {
      return error;
    }
  }
}

export default practice;