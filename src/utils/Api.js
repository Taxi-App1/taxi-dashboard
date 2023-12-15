import axios from "axios";

class Request {
    async getDriver() {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_URL}driver/getDriver`
            );
            return response.data;
        } catch (error) {
            console.log("Error fetching driver data:", error);
        }
    }
    async getDriverById(id) {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_URL}driver/getDriver/${id}`
            );
            return response.data;
        } catch (error) {
            console.log("Error fetching driver data:", error);
        }
    }
    async createDriver(data) {
        const formData = new FormData();
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("phone_number", data.phone_number);
        formData.append("password", data.password);
        formData.append("image", data.image);
        formData.append("picture_id", data.picture_id);
        formData.append("car_type", data.car_type);
        formData.append("car_color", data.car_color);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URL}driver/registerDriver`,
                formData
            );
            return response.data;
        } catch (error) {
            console.log("Error fetching driver data:", error);
        }
    }
    async editDriver(id, data) {
        const formData = new FormData();
        data.first_name && formData.append("first_name", data.first_name);
        data.last_name && formData.append("last_name", data.last_name);
        data.phone_number && formData.append("phone_number", data.phone_number);
        data.password && formData.append("password", data.password);
        data.image && formData.append("image", data.image);
        data.picture_id && formData.append("picture_id", data.picture_id);
        data.car_type && formData.append("car_type", data.car_type);
        data.car_color && formData.append("car_color", data.car_color);
        typeof(data.isAccess) == "boolean" && formData.append("isAccess", data.isAccess);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URL}driver/updateDriver/${id}`,
                formData
            );
            return response.data;
        } catch (error) {
            console.log("Error fetching driver data:", error);
        }
    }
    async deleteDriver(id) {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_URL}driver/deleteDriver/${id}`
            );
            return response.data;
        } catch (error) {
            console.log("Error DELETE driver data:", error);
        }
    }
    // users
    async getUser() {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_URL}user/getUser`
            );
            return response.data;
        } catch (error) {
            console.log("Error fetching driver data:", error);
        }
    }
    async getUserById(id) {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_URL}user/getUser/${id}`
            );
            return response.data;
        } catch (error) {
            console.log("Error fetching user data:", error);
        }
    }

    async createUser(data) {
        const formData = new FormData();
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("phone_number", data.phone_number);
        formData.append("password", data.password);
        formData.append("image", data.image);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URL}user/registerUser`,
                formData
            );
            return response.data;
        } catch (error) {
            console.log("Error fetching driver data:", error);
        }
    }
    async editUser(id, data) {
        const formData = new FormData();
        data.first_name && formData.append("first_name", data.first_name);
        data.last_name && formData.append("last_name", data.last_name);
        data.phone_number && formData.append("phone_number", data.phone_number);
        data.password && formData.append("password", data.password);
        data.image && formData.append("image", data.image);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URL}user/updateUser/${id}`,
                formData
            );
            return response.data;
        } catch (error) {
            console.log("Error fetching driver data:", error);
        }
    }
    async deleteUser(id) {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_URL}user/deleteUser/${id}`
            );
            return response.data;
        } catch (error) {
            console.log("Error DELETE driver data:", error);
        }
    }
}

const request = new Request();

export default request;
