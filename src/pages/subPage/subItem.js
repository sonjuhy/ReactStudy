import { Button } from 'react-bootstrap';

import { increment } from '../../store/redux/feature/count/countSlice';
import { useSelector, useDispatch } from 'react-redux';

const SubItem = () => {

    const reduxCount = useSelector((state)=>state.counterReducer.count);
    const dispatch = useDispatch();

    const onClickButton = () => {
        dispatch(increment());
    }

    return (
        <div>
            <p>this is subItemPage</p>
            <p>count : {reduxCount}</p>
            <Button onClick={onClickButton}>Click</Button>
        </div>
    );
}
export default SubItem;