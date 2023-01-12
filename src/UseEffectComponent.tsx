import {useState, useEffect} from 'react';

function UseEffectComponent() {

    const [val, valSet] = useState<number>(0);

    useEffect(() => {
           const timer = window.setInterval(() => {
                valSet((v) => v + 1);
            }, 1000);

            return () => {
                console.log('unmounting');
                window.clearInterval(timer);
            }
        
    }, []);
return (<div>{val}</div>)
}
export default UseEffectComponent;