
try {
      const url = "/api/jobs";
      const cleanScript = {
        type: "script",
        key: "bye",
      };
      /* const jsonse = JSON.stringify(cleanScript);

      const parts = new Blob([jsonse], { type: "text/json" });

      const file = new File([parts], "sample.json", {
        lastModified: new Date(2022, 5, 10),
        type: "text/json",
      });

      const headers = {
        "Content-Type": "multipart/form-data",
        "Accept-Encoding": "gzip, deflate, br",
        Connection: "keep-alive",
      };

      const formData = new FormData();

      formData.append("file_to_upload", file, file.name); */

      const options = {
        method: "POST",
        // headers,
        // data: formData,
        headers: {
          "Content-Type": "application/json",
        },
        data: cleanScript,
      };

      return await axios(url, options);
    } catch (err) {
      return err.response;
    }
