import React from 'react';

function PostItem({post}) {
    const {userId, id, title, body} = post;
    return(
        <>
            <table><tr>
                <td width={50}><b>{ userId }</b></td>
                <td width={50}>{ id }</td>
                <td width={500}>{ title }</td>
                <td width={1000}>{ body }</td>
            </tr></table>
        </>
    );
}

export default PostItem;