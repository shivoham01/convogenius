import { useState } from "react";
import { toast } from "react-toastify";

const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    // SendMail Button
    const sendMail = async (e) => {
        e.preventDefault();

        if (email === "") {
            return toast.warning("Please Enter Your Email", {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
            });
        }

        const url = "https://convogenius-r8n7.onrender.com/user/forget-password";
        const data = {
            email: email
        }
        // Request Object
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

            // If No Error
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
            <h1 style={{ marginTop: '30px' }}>Forget Password</h1>
            <form style={{ margin: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email..." style={{ width: '200px', padding: '5px', borderRadius: '5px' }} />
                <button onClick={sendMail} type="submit" style={{ padding: '5px', borderRadius: '5px', background: 'black', color: 'white', border: '2px solid gray', cursor: 'pointer' }}>Submit</button>
            </form>
        </div>
    );
}

export default ForgetPassword;