import { useState, useEffect }  from 'react';
import '../../styles/main.scss';

export const TitleSocialMedia = () => {

    const [ checked, setChecked ] = useState<boolean>(false);
    const body = document.body;

    const handleTheme = () => {
        if( !checked ) {
            body.classList.add('dark-theme');
            setChecked(true);
            return;
        }
        body.classList.remove('dark-theme');
        setChecked(false);
    }
    
    useEffect(() => {
        if(
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            //setChecked(true);
            //body.classList.add('dark-theme');
        }
    }, []);
    
    return (
        <div className="title-theme">
            <div>
                <p className="title-dash">
                Social Media Dashboard
                </p>
                <p className="stats-dash">
                Total Followers: 23,004
                </p>
            </div>
            <div className="divider"></div>

            
            <div className="theme-switcher">
                <p>
                Dark Mode
                </p>
                <input type="checkbox" 
                       defaultChecked={checked}
                       id="theme-switcher" 
                       onClick={handleTheme}/>
            </div>
        </div>
    );
}
