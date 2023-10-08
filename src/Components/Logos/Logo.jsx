import { useContext } from 'react';
import logoDark from "./../images/logo-dark.png";
import logoLight from "./../images/logo-light.png";
import { ThemeContext } from '../../Providers/ThemeProvider';

function Logo(props) {
    const themeContext = useContext(ThemeContext);
    const logos = {light: logoLight, dark: logoDark };

    return (
        <img src={logos[themeContext.theme]} {...props}>
            {props.children}
        </img>
    );
};

export default Logo;