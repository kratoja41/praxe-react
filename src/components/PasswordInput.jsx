import { Input } from "antd";
export default function PasswordInput({ password, onChange, setError }) {

    const handleBlur = () => {
        if (!password.trim()) {
            setError("Heslo je povinné.");
        } else {
            setError("");
        }
    };

    return (
        <>
            <label htmlFor="password" className={"label"}>
                Heslo <span className="red">*</span>
            </label>
            <Input.Password size={"large"}
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={onChange}
                onBlur={handleBlur}
                            className={"input"}
            ></Input.Password>
        </>
    );
}
