import { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const { token } = useParams();

    // Set New Password
    const setPasswordFunc = async (e) => {
        e.preventDefault();

        // Both password check
        if (newPassword !== confirmPassword) {
            return toast.error("Passwords do not match", {
                position: 'top-center',
                autoClose: 2000,
            });
        }

        // Request Object
        const url = `https://convogenius-r8n7.onrender.com/user/reset-password/${token}`;
        const data = {
            password: newPassword
        }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
        try {
            // Sending login fetch request
            const response = await fetch(url, requestOptions);

            const responseData = await response.json();
            if (responseData.error) {
                return toast.error(`${responseData.error}`, {
                    position: 'top-center',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                });
            }

            // If no error
            toast.success(`${responseData.message}`, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
        catch (error) {
            toast.error(`${error.message}`, {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }
    }
    return (
        <div style={{ color: 'white', textAlign: 'center' }}>
            <h1 style={{ marginTop: '30px' }}>Reset Password</h1>
            <form style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} type="text" placeholder="Enter New Password..." style={{ width: '200px', padding: '5px', borderRadius: '5px' }} />
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="text" placeholder="Confirm Password..." style={{ width: '200px', padding: '5px', borderRadius: '5px' }} />
                <button onClick={setPasswordFunc} type="submit" style={{ padding: '5px', borderRadius: '5px', background: 'black', color: 'white', border: '2px solid gray', cursor: 'pointer' }}>Submit</button>
            </form>
        </div>);
}

export default ResetPassword;