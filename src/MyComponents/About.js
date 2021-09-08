import React from 'react'

export const About = () => {
    let myStyle={
        minHeight:"70vh",
        margin:"40px auto"      
    }
    return (
        <div className=" container" style={myStyle}>
            This is My about Component
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum velit quisquam totam magnam mollitia placeat est nam deserunt exercitationem asperiores quaerat quo, quasi laboriosam tenetur debitis dolores alias quos aperiam consequatur, culpa id officiis!</p>
        </div>
    )
}
