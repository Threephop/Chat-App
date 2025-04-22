export const signup = (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;

    } catch (error) {
        console.error("Error during signup:", error.message);
        res.status(500).send("Internal Server Error");
    }
}

export const login = (req, res) => {
    console.log("Login User");
    res.send("Login User");
}

export const logout = (req, res) => {
    console.log("Logout User");
    res.send("Logout User");
}