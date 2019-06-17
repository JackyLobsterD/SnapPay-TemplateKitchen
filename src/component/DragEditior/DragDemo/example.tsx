import React from 'react'
import SourceBox from './SourceBox'
import TargetBox from './TargetBox'
import Colors from './Colors'

export default function Container() {
    return (
        <>
            <div style={{overflow: 'hidden', clear: 'both', margin: '-.5rem'}}>

                <div style={{float: 'left', width:'50%'}}>
                    <TargetBox/>
                </div>
                <div style={{float: 'left'}}>
                    <SourceBox color={Colors.YELLOW}/>
                    <SourceBox color={Colors.YELLOW}/>
                    <SourceBox color={Colors.BLUE}/>
                    <SourceBox color={Colors.BLUE}/>

                    {/*<SourceBox color={Colors.BLUE}>*/}
                    {/*    <SourceBox color={Colors.YELLOW}>*/}
                    {/*        <SourceBox color={Colors.YELLOW}/>*/}
                    {/*        <SourceBox color={Colors.BLUE}/>*/}
                    {/*    </SourceBox>*/}
                    {/*    <SourceBox color={Colors.BLUE}>*/}
                    {/*        <SourceBox color={Colors.YELLOW}/>*/}
                    {/*    </SourceBox>*/}
                    {/*</SourceBox>*/}
                </div>

            </div>
        </>
    )
}
