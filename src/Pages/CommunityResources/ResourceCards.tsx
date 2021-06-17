import React from 'react'
import dataInternal from '../../Data/CommunityResources/Internal.json';
import dataPartner from '../../Data/CommunityResources/Partner-resources.json';
import dataAuntBertha from '../../Data/CommunityResources/AuntBertha.json';
import Card from './Card';
import styled from 'styled-components';

const Grid=styled.div`
display:grid;
grid-template-columns: 140px 140px 140px 140px 140px;
grid-gap: 20px 10px;
`
const GridElement=styled.div`
//padding:6px;
`

const ResourceCards = (resource:string) => {
    var data;
    if(resource ==='Internal Resource'){
        data=dataInternal;
    }
    else if(resource ==='Partner Resource'){
            data=dataPartner;
    }
    else {
        data=dataAuntBertha;
    }
    return (
        <div className="mb-4">
        <Grid>
            {
            data.nodes.map((resource_type:any) => {
                return (
                  <GridElement>
                <Card resource={resource_type.label} count={resource_type.count} /></GridElement>);
            })
        }
        </Grid>
        <br/>
        </div>
    )
}

export default ResourceCards
