import { Button } from 'react-bootstrap';

import {getData, setData} from '../../store/self/SelfStore';
import SubItem from './subItem';

const SubPage = () => {

    return (
        <div>
            <p>this is subPage</p>
            <p>count : {getData('count')}</p>
            <Button onClick={()=>setData('count', getData('count')+1)}>Click</Button>
            <SubItem/>
        </div>
    );
}
export default SubPage;