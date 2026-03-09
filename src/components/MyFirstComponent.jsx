
function MyFirstComponent() {

    const user = {
        firstName: "Alice",
        surname: "Smith"
    }


    const renderMessage = () => {
        return <h3>This is a message</h3>
    }


    const divStyle = {
        fontSize: "1.4rem",
        color: "#fff",
        border: "5px solid #fff",
        margin: "2em auto",
        padding: "2em",
    }


    return (
        <>
            <h2>This is my first component!</h2>

            <h3>Total: {2 + 2}</h3>

            <h3>Hi, {user.firstName} {user.surname.toUpperCase()}</h3>

            {renderMessage()}

            {/* Example of a div with inline CSS */}
            <div style={divStyle}>this div has some inline style</div>
        </>
    )
}

export default MyFirstComponent