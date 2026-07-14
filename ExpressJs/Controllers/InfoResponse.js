//information about the user
function InfoResponse(req, res) {
    const data = {
        name: "shavali",
        age: 22,
        hobbies: ["coding", "reading", "watching movies"],
        address: {
            city: "kadapa",
            state: "Andhra Pradesh",
            country: "India",
            pincode: 516001
        },
        isSleeping8hours: true,
    };
    res.status(200).send(data);
}

module.exports = { InfoResponse };
