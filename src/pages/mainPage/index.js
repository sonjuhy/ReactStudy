import React from 'react';

import { Button } from 'react-bootstrap';
import {getData, setData} from '../../store/self/SelfStore';

import { increment } from '../../store/redux/feature/count/countSlice';
import { useSelector, useDispatch } from 'react-redux';

const MainPage = () => {
    const reduxCount = useSelector((state)=>state.counterReducer.count);
    const dispatch = useDispatch();

    const onClickButton = () => {
        setData('count', getData('count')+1);
        dispatch(increment());
    }
    return (
        <div>
            <p>this is mainPage</p>
            <p>count : {getData('count')}</p>
            <Button onClick={()=>{setData('count', getData('count')+1)}}>only self</Button>
            <Button onClick={onClickButton}>sync</Button>
            <p>redux count : {reduxCount}</p>
        </div>
    );
}
export default MainPage;