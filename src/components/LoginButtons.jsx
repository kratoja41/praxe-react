import { Button } from 'antd';
import { Divider } from "antd";
import {Link} from "react-router-dom";
export default function LoginButtons() {
    return (
        <>
            <Button type="link" >
                <Link to="/lost-password">Zapomenuté heslo</Link>

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
                <a href="#">Klikněte zde</a> a nastavte si heslo.
            </p>
        </>
    );
}
