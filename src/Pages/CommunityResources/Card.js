import React from 'react';
import {Card} from '@innovaccer/design-system';
import '@innovaccer/design-system/css';
import Icon from '../../Components/ResourceIcons';

const ResourceCard = ({resource,count}) => {
    return (
        <Card shadow="none" className="p-6 h-75 align-middle">
            <div className="align-middle pl-6 pt-4">
            <div className="pl-7"><Icon type={resource} /></div>
            <div>{resource}{" "}({count})</div></div>
        </Card>
    );
}

export default ResourceCard;
