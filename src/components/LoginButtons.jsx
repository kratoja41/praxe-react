import { Button } from 'antd';
import { Divider } from "antd";
import {Link} from "react-router-dom";
export default function LoginButtons() {
    return (
        <>
            <Button type="link" className={"link-container"}>
                <Link to="/lost-password"> 🔒<span className={"link-password"}>Zapomenuté heslo</span></Link>

            </Button>
            <Button  type={"primary"} className={"btn"}  htmlType="submit" >
               Přihlásit se
            </Button>
            <Divider type="horizontal" size="large" >
                 nebo
            </Divider>
            <Button type="default" className={"create-account"}>
                Vytvořit nový účet
            </Button>

            <p className="existing-donor">
                Jste náš stávající dárce a nemůžete se přihlásit?

            </p>
        </>
    );
}
