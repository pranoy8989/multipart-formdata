import axios from "axios";

const FormData = require("form-data");
const str = require("string-to-stream");
const fs = require("fs");

// const jsonObj = JSON.parse(request.payload);

// convert JSON object to String
// const jsonStr = JSON.stringify(jsonObj);

// var Readable = require('stream').Readable
//
// var s = new Readable();
// s.push(jsonStr);    // the string you want
// s.push(null);

// const form2 = new FormData();
// form2.append("file_to_upload", fs.createReadStream("sample.json"));

try {
      const form = new FormData();

      const contentStream = str(JSON.stringify(request.payload));
      form.append("file_to_upload", contentStream, {
        filename: "sample.json",
        contentType: "application/json",
      });

      const url = `http://10.22.129.147:30240/uploadFile`;
      const options = {
        headers: { ...form.getHeaders() },
        method: "POST",
        data: form,
      };

      const res = await axios(url, options);
      return h.response(res.data).code(200);
    } catch (err) {
      return h.response(err.response).code(500);
    }
