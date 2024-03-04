import axios from "axios";
import { toast } from "react-toastify";
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
        formData.append("expire_date", data.expire_date);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URL}driver/registerDriver`,
                formData
            );
            toast.success("Driver created successfully");
            return response.data;
        } catch (error) {
            toast.error("Error Created Driver");
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
        typeof data.isAccess == "boolean" &&
            formData.append("isAccess", data.isAccess);
        data.expire_date && formData.append("expire_date", data.expire_date);
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URL}driver/updateDriver/${id}`,
                formData
            );
            toast.success("Driver Edited successfully");
            return response.data;
        } catch (error) {
            toast.error("Error Edited Driver");
            console.log("Error fetching driver data:", error);
        }
    }
    async deleteDriver(id) {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_URL}driver/deleteDriver/${id}`
            );
            toast.success("Driver Deleted successfully");
            return response.data;
        } catch (error) {
            toast.error("Error Deleted Driver");
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
    async getAdminById(id) {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_URL}admin/getAdmin/${id}`
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
            toast.success("User Created Successfully");
            return response.data;
        } catch (error) {
            toast.error("Error Created User");
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
            toast.success("User Edited Successfully");
            return response.data;
        } catch (error) {
            toast.error("Error Edited User");
            console.log("Error fetching User data:", error);
        }
    }
    async deleteUser(id) {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_URL}user/deleteUser/${id}`
            );
            toast.success("User Deleted Successfully");
            return response.data;
        } catch (error) {
            toast.erro("Error Deleted User");
            console.log("Error DELETE User data:", error);
        }
    }
    async deleteAdmin(id) {
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_URL}admin/delete/${id}`
            );
            toast.success("Admin Deleted Successfully");
            return response.data;
        } catch (error) {
            toast.error("Error Deleted Admin");
            console.log("Error DELETE admin data:", error);
        }
    }
    async editAdmin(id, data) {
        const formData = new FormData();

        // data.username && formData.append("user_name", data.username);
        // data.full_name && formData.append("full_name", data.full_name);
        // data.email && formData.append("email", data.email);
        // data.password && formData.append("password", data.password);

        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URL}admin/update/${id}`,
                data
            );
            toast.success(" Admin Updated Successfully");
            return response.data;
        } catch (error) {
            toast.error(" Error Updated Admin");
            console.log("Error edit admin data :", error);
        }
    }
    async upgradeRole(id, role) {
        console.log(role)
        try {
            const response = await axios.put(
                `${process.env.REACT_APP_URL}admin/upgrade/${id}`,
                { role }
            );
            toast.success("isSuperAdmin");
            return response.data;
        } catch (error) {
            toast.error(" Error Updated Admin");
            console.log("Error edit admin data :", error);
        }
    }
    async createAdmin(data) {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_URL}admin/register`,
                {
                    username: data.username,
                    full_name: data.full_name,
                    email: data.email,
                    password: data.password,
                }
            );
            toast.success("Admin Created Successfully");
            return response.data;
        } catch (error) {
            toast.error("Error Created Admin");
            console.log("Error create admin data :", error);
        }
    }
    async getAdmin() {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_URL}admin`
            );
            return response?.data?.response;
        } catch (error) {
            console.log("Error fetching Admin data:", error);
        }
    }
}

const request = new Request();

export default request;
