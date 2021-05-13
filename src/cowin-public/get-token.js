const fs = require("fs");
const fastify = require("fastify");
const cors = require("fastify-cors");

function waitForSms() {
    return new Promise((resolve) => {
        const server = fastify();

        server.register(cors, {
            origin: true,
        });

        server.post("/otp", async (request, response) => {
            const query = new URLSearchParams(request.query);
            if (query.has("otp")) {
                response.send();
                setTimeout(() => {
                    server.close();
                    resolve(query.get("otp"));
                });
            }
        });

        server.listen(8888);
    });
}

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

(async () => {
    const otp = await waitForSms();
    fs.writeFile("otp.txt", otp, () => {});
    console.log(otp);
    await sleep(5000);
})();
